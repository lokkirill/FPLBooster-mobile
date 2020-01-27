import axios from 'axios'; 

class FPLApiService {
  async fetchFPLData() {
    const response = await axios({
      baseURL: 'https://fantasy.premierleague.com/api/bootstrap-static/',
      responseType: 'json',
      headers: {
        Accept: 'application/json',	
        'Content-Type': 'application/json',	
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',	
        'Sec-Fetch-User': '?1',	
        'Upgrade-Insecure-Requests': '1',
      }
    })
    if (response.status !== 200) {
      throw new Error(`FPLApiService fetchFPLData failed, HTTP status ${response.status}`);
    }
    const finalData = this._FPLData(response.data)
    return finalData
  }

  _FPLData (data) {
    const { elements, teams, element_types } = data
    const teamsWithImage = teams.map(team => {
      return {
        ...team,
        image: `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${team.code}-66.webp`,
      }  
    })

    const sortedElements = this._elementsQuickSort(elements.map(player => {
      let team = teamsWithImage.filter(team => {return team.id == player.team}); 
      let element_type = element_types.filter(type => {return type.id == player.element_type}); 
      
      return {
        ...player,
        photo: `https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p${player.photo.split('.')[0]}.png`,
        team: team ? team[0] : { id: player.team },
        element_type: element_type ? element_type[0] : { id: player.element_type },
      }
    }))

    return {
      ...data,
      teams: teamsWithImage,
      elements: sortedElements
    }
  }

  _elementsQuickSort(items, left, right) {
    let index;
    if (items.length > 1) {
      left = typeof left != "number" ? 0 : left;
      right = typeof right != "number" ? items.length - 1 : right;
      index = this._partition(items, left, right);
      if (left < index - 1) {
        this._elementsQuickSort(items, left, index - 1);
      }
      if (index < right) {
        this._elementsQuickSort(items, index, right);
      }
    }
    return items;
  }
  
  _partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)].total_points,
        i     = left,
        j     = right;
    while (i <= j) {
      while (items[i].total_points > pivot) {
        i++;
      }
      while (items[j].total_points < pivot) {
        j--;
      }
      if (i <= j) {
        this._swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }
  
  _swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  }
}

export default new FPLApiService();
