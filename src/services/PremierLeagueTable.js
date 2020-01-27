import axios from 'axios'; 

class PremierLeagueTableService {
  async fetchPremierLeagueTable() {
    const response = await axios({
      baseURL: `https://footballapi.pulselive.com/football/standings?compSeasons=${274}&altIds=true&detail=2&football_competition=1`,
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
      throw new Error(`PremierLeagueTableService fetchTables failed, HTTP status ${response.status}`);
    }
    return {
      season: response.data.compSeason,
      table: response.data.tables[0].entries,
    }
  }
}

export default new PremierLeagueTableService();
