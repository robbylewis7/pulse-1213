let teamList = {
    NBA: [
        {team: 'Atlanta Hawks', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/atl.png'},
        {team: 'Boston Celtics', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png'},
        {team: 'Brooklyn Nets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bkn.png'},
        {team: 'Charlotte Hornets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/cha.png'},
        {team: 'Chicago Bulls', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/chi.png'},
        {team: 'Cleveland Cavaliers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/cle.png'},
        {team: 'Dallas Mavericks', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/dal.png'},
        {team: 'Denver Nuggets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/den.png'},
        {team: 'Detroit Pistons', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/det.png'},
        {team: 'Golden State Warriors', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/gsw.png'},
        {team: 'Houston Rockets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/hou.png'},
        {team: 'Indiana Pacers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/ind.png'},
        {team: 'LA Clippers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lac.png'},
        {team: 'Los Angeles Lakers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lal.png'},
        {team: 'Memphis Grizzlies', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mem.png'},
        {team: 'Miami Heat', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mia.png'},
        {team: 'Milwaukee Bucks', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mil.png'},
        {team: 'Minnesota Timberwolves', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/min.png'},
        {team: 'New Orleans Pelicans', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/no.png'},
        {team: 'New York Knicks', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/nyk.png'},
        {team: 'Oklahoma City Thunder', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/okc.png'},
        {team: 'Orlando Magic', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/orl.png'},
        {team: 'Philadelphia 76ers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/phi.png'},
        {team: 'Phoenix Suns', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/phx.png'},
        {team: 'Portland Trail Blazers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/por.png'},
        {team: 'Sacramento Kings', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/sac.png'},
        {team: 'Toronto Raptors', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/tor.png'},
        {team: 'Utah Jazz', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/uth.png'},
        {team: 'Washington Wizards', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/was.png'},
        ],
    MLB: [
        {team: 'Atlanta Braves', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/atl.png'},
        {team: 'Miami Marlins', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mia.png'},
        {team: 'New York Mets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nym.png'},
        {team: 'Philadelphia Phillies', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/phi.png'},
        {team: 'Washington Nationals', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/was.png'},
        {team: 'Chicago Cubs', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chc.png'},
        {team: 'Cincinnati Reds', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cin.png'},
        {team: 'Milwaukee Brewers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mil.png'},
        {team: 'Pittsburgh Pirates', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/pit.png'},
        {team: 'St. Louis Cardinals', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/stl.png'},
        {team: 'Arizona Diamondbacks', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/ari.png'},
        {team: 'Colorado Rockies', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/col.png'},
        {team: 'San Diego Padres', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sd.png'},
        {team: 'San Francisco Giants', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sf.png'},
        {team: 'Los Angeles Dodgers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/lad.png'},
        {team: 'Baltimore Orioles', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bal.png'},
        {team: 'Boston Red Sox', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bos.png'},
        {team: 'New York Yankees', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nyy.png'},
        {team: 'Tampa Bay Rays', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tb.png'},
        {team: 'Chicago White Sox', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chw.png'},
        {team: 'Cleveland Indians', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cle.png'},
        {team: 'Chicago White Sox', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chw.png'},
        {team: 'Detroit Tigers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/det.png'},
        {team: 'Kansas City Royals', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/kc.png'},
        {team: 'Minnesota Twins', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/min.png'},
        {team: 'Houston Astros', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/hou.png'},
        {team: 'Los Angeles Angels', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/laa.png'},
        {team: 'Oakland Athletics', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/oak.png'},
        {team: 'Seattle Mariners', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sea.png'},
        {team: 'Texas Rangers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tex.png'},
        ],

    NFL: [ 
        {team: 'Arizona Cardinals', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ari.png'},
        {team: 'Atlanta Falcons', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/atl.png'},
        {team: 'Buffalo Bills', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/buf.png'},
        {team: 'Carolina Panthers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/car.png'},
        {team: 'Chicago Bears', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/chi.png'},
        {team: 'Cincinnati Bengals', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cin.png'},
        {team: 'Cleveland Browns', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cle.png'},
        {team: 'Dallas Cowboys', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/dal.png'},
        {team: 'Denver Broncos', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/den.png'},
        {team: 'Detroit Lions', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/det.png'},
        {team: 'Green Bay Packers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png'},
        {team: 'Houston Texans', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/hou.png'},
        {team: 'Indianapolis Colts', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ind.png'},
        {team: 'Jacksonville Jaguars', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/jax.png'},
        {team: 'Kansas City Chiefs', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/kc.png'},
        {team: 'Miami Dolphins', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/mia.png'},
        {team: 'Minnesota Vikings', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/min.png'},
        {team: 'New England Patriots', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ne.png'},
        {team: 'New Orleans Saints', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/no.png'},
        {team: 'New York Giants', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyg.png'},
        {team: 'New York Jets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyj.png'},
        {team: 'Oakland Raiders', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png'},
        {team: 'Philadelphia Eagles', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/phi.png'},
        {team: 'Pittsburgh Steelers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/pit.png'},
        {team: 'Los Angeles Rams', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lar.png'},
        {team: 'Los Angeles Chargers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lac.png'},
        {team: 'San Francisco 49ers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sf.png'},
        {team: 'Seattle Seahawks', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sea.png'},
        {team: 'Tampa Bay Buccaneers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/tb.png'},
        {team: 'Tennessee Titans', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ten.png'},
        {team: 'Washington Redskins', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/was.png'},
        ],
    NHL: [
        {team: 'Anaheim Ducks', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/ana.png'},
        {team: 'Arizona Coyotes', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/ari.png'},
        {team: 'Boston Bruins', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/bos.png'},
        {team: 'Buffalo Sabres', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/buf.png'},
        {team: 'Calgary Flames', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/cgy.png'},
        {team: 'Carolina Hurricanes', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/car.png'},
        {team: 'Chicago Blackhawks', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/chi.png'},
        {team: 'Colorado Avalanche', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/col.png'},
        {team: 'Columbus Blue Jackets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/col.png'},
        {team: 'Dallas Stars', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/dal.png'},
        {team: 'Detroit Red Wings', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/det.png'},
        {team: 'Edmonton Oilers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/edm.png'},
        {team: 'Florida Panthers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/fla.png'},
        {team: 'Los Angeles Kings', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/la.png'},
        {team: 'Minnesota Wild', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/min.png'},
        {team: 'Montreal Canadiens', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/mon.png'},
        {team: 'Nashville Predators', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/nsh.png'},
        {team: 'New Jersey Devils', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/njd.png'},
        {team: 'New York Islanders', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/nyi.png'},
        {team: 'New York Rangers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/nyr.png'},
        {team: 'Ottawa Senators', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/ott.png'},
        {team: 'Philadelphia Flyers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/phi.png'},
        {team: 'San Jose Sharks', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/sj.png'},
        {team: 'St Louis Blues', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/stl.png'},
        {team: 'Tampa Bay Lightning', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/tb.png'},
        {team: 'Toronto Maple Leafs', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/tor.png'},
        {team: 'Vancouver Canucks', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/van.png'},
        {team: 'Vegas Golden Knights', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/vgs.png'},
        {team: 'Washington Capitals', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/was.png'},
        {team: 'Winnipeg Jets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/wpg.png'},
        ]
}

module.exports = teamList;