// populate the drop down menu with songs
function populateMenu() {
    // select the 'selDataset' element
    select = document.getElementById('selDataset')
    // for each song, create an option in the selected element
    for (i = 0; i < data.length; i++) {
       option = document.createElement( 'option' );
       option.value = i;
       option.text = data[i]['name'] + ' - ' + data[i]['artists'];
       select.add( option ); 
    }
}
// listen for drop down menu 'change' event
function optionChanged(new_data) {
    // when event occurs, send new data to graphs and demographic info
    regraph(new_data);
    demographicInfo(new_data);
}
// initizlize the graph for first song
function graph() {
    let green = 'rgba(0, 194, 61, 1)'
    let blue = 'rgba(0, 194, 87, 0.51)'

    // set data for graph
    let trace1 = {
        x: ['Acousticness','Danceability','Energy','Instrumentalness','Liveness','Loudness','Speechiness','Valence','Popularity'],
        y: [data[0]['acousticness'],data[0]['danceability'],data[0]['energy'],data[0]['instrumentalness'],data[0]['liveness'],-data[0]['loudness']/10,data[0]['speechiness'],data[0]['valence'],data[0]['popularity']/100],
        type: 'bar',
        orientation: 'v',
        marker: {
            color: [
            green,
            blue,
            blue,
            blue,
            green,
            green,
            blue,
            green,
            blue
            ]
        }
    };
    let layout = {
        xaxis: {
            title: 'Audio Metrics',
            titlefont: 'Old Standard TT, serif',
            size: 24,
            color: 'grey'
        },
        yaxis: {
            title: 'Values',
            titlefont: 'Old Standard TT, serif',
            size: 24,
            color: 'grey'
        },
        height: 400,
        width: 1000,
        margin: {
            b:80,
            l:80,
            r:80,
            t:40
        }
    }
    // plot graph
    let plot_data = [trace1];
    Plotly.newPlot('bar', plot_data, layout);
}
// change plotly graph to new subject id
function regraph(new_data) {
    let plot_data = [];
    let trace1 = {};
    let green = 'rgba(0, 194, 61, 1)'
    let blue = 'rgba(0, 194, 87, 0.51)'
    let purple = 'rgba(211, 0, 155, 1)'

    if (data[new_data]['acousticness'] > 0.983) {
        acousticness_color = purple
    } else if (data[new_data]['acousticness'] > 0.4932139761498802) {
        acousticness_color = green
    } else {
        acousticness_color = blue
    }
    if (data[new_data]['danceability'] > 0.76) {
        danceability_color = purple
    } else if (data[new_data]['danceability'] > 0.5381497172015609) {
        danceability_color = green
    } else {
        danceability_color = blue
    }
    if (data[new_data]['energy'] > 0.867) {
        energy_color = purple
    } else if (data[new_data]['energy'] > 0.4885931303603694) {
        energy_color = green
    } else {
        energy_color = blue
    }
    if (data[new_data]['instrumentalness'] > 0.831) {
        instrumentalness_color = purple
    } else if (data[new_data]['instrumentalness'] > 0.16193714313891552) {
        instrumentalness_color = green
    } else {
        instrumentalness_color = blue
    }
    if (data[new_data]['liveness'] > 0.408) {
        liveness_color = purple
    } else if (data[new_data]['liveness'] > 0.2066903493634828) {
        liveness_color = green
    } else {
        liveness_color = blue
    }
    if (data[new_data]['loudness'] > -5.0139) {
        loudness_color = purple
    } else if (data[new_data]['loudness'] > -11.37028930192044) {
        loudness_color = green
    } else {
        loudness_color = blue
    }
    if (data[new_data]['speechiness'] > 0.192) {
        speechiness_color = purple
    } else if (data[new_data]['speechiness'] > 0.09405769441289161) {
        speechiness_color = green
    } else {
        speechiness_color = blue
    }
    if (data[new_data]['valence'] > 0.887) {
        valence_color = purple
    } else if (data[new_data]['valence'] > 0.5320951423473742) {
        valence_color = green
    } else {
        valence_color = blue
    }
    if (data[new_data]['popularity'] > 60) {
        popularity_color = purple
    } else if (data[new_data]['popularity'] > 31.55) {
        popularity_color = green
    } else {
        popularity_color = blue
    }
    // set data for graph
    trace1 = {
        x: ['Acousticness','Danceability','Energy','Instrumentalness','Liveness','Loudness','Speechiness','Valence','Popularity'],
        y: [data[new_data]['acousticness'],data[new_data]['danceability'],data[new_data]['energy'],data[new_data]['instrumentalness'],data[new_data]['liveness'],-data[new_data]['loudness']/10,data[new_data]['speechiness'],data[new_data]['valence'],data[new_data]['popularity']/100],
        type: 'bar',
        orientation: 'v',
        marker: {
            color: [
                acousticness_color,
                danceability_color,
                energy_color,
                instrumentalness_color,
                liveness_color,
                loudness_color,
                speechiness_color,
                valence_color,
                popularity_color
            ]
        }
    };
    // plot graph
    plot_data = [trace1];
    console.log(plot_data[0]);
    Plotly.restyle('bar', 'x', [plot_data[0]['x']]);
    Plotly.restyle('bar', 'marker', [plot_data[0]['marker']])
    Plotly.restyle('bar', 'y', [plot_data[0]['y']]);
}
// populate the demographic information
function demographicInfo(new_data) {
    var song_name = document.getElementById('song_name');
    song_name.textContent = `Name: ${data[new_data]['name']}`;
    var tempo = document.getElementById('tempo');
    tempo.textContent = `Tempo: ${Math.round(data[new_data]['tempo'])}`;
    var mode = document.getElementById('mode');
    if (data[new_data]['mode'] == 0) {
        mode.textContent = 'Mode: Minor'
    } else {mode.textContent = 'Mode: Major'}
    var explicit = document.getElementById('explicit');
    if (data[new_data]['explicit'] == 0) {
        explicit.textContent = 'Explicit: False'
    } else {explicit.textContent = 'Explicit: True'}
    var duration = document.getElementById('duration');
    duration.textContent = `Duration(sec): ${Math.round(data[new_data]['duration_ms']/1000)}`;
    var key = document.getElementById('key');
    if (data[new_data]['key'] == 0) {key.textContent = 'Key: C'} 
    else if (data[new_data]['key'] == 1 ){key.textContent = 'Key: C#'}
    else if (data[new_data]['key'] == 2 ){key.textContent = 'Key: D'}
    else if (data[new_data]['key'] == 3 ){key.textContent = 'Key: D#'}
    else if (data[new_data]['key'] == 4 ){key.textContent = 'Key: E'}
    else if (data[new_data]['key'] == 5 ){key.textContent = 'Key: F'}
    else if (data[new_data]['key'] == 6 ){key.textContent = 'Key: F#'}
    else if (data[new_data]['key'] == 7 ){key.textContent = 'Key: G'}
    else if (data[new_data]['key'] == 8 ){key.textContent = 'Key: G#'}
    else if (data[new_data]['key'] == 9 ){key.textContent = 'Key: A'}
    else if (data[new_data]['key'] == 10 ){key.textContent = 'Key: A#'}
    else if (data[new_data]['key'] == 11 ){key.textContent = 'Key: B'}
    var popularity = document.getElementById('popularity');
    popularity.textContent = `Popularity: ${data[new_data]['popularity']}`;  
}
populateMenu()
graph()
demographicInfo(0)