


// populate the drop down menu with test subject IDs
// function populateMenu() {

//     // select the 'selDataset' element
//     select = document.getElementById('selDataset')
//     // for each item in the 'names' array, create an option in the selected element
//     for (i = 0; i < data.length; i++) {
//        option = document.createElement( 'option' );
//        option.value = i;
//        option.text = data[i]['name'] + ' - ' + data[i]['artists'];
//        select.add( option ); 
//     }
// }

// listen for drop down menu 'change' event
function optionChanged(new_data) {
    // when event occurs, send new data to graphs and demographic info
    regraph(new_data);
    // demographicInfo(new_data);
}


// initizlize the graph for first ID
function graph() {
    let x_values = []
    for (i = 0; i < data.length; i++) {
        x_values.push(data[i]['acousticness'])
    }
    console.log(x_values)

    // set data for graph
    let trace1 = {
        x: x_values,
        type: 'histogram'
    };
    let layout = {
        xaxis: {
            title: 'Metric Value',
            titlefont: 'Old Standard TT, serif',
            size: 24,
            color: 'grey'
        },
        yaxis: {
            title: 'Frequency',
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
    let x_values = []
    for (i = 0; i < data.length; i++) {
        x_values.push(data[i][`${new_data}`])
    }





    let plot_data = [];
    let trace1 = {};

    // set data for graph
    trace1 = {
        x: x_values,
        type: 'histogram'

    };



    // plot graph
    plot_data = [trace1];

    Plotly.restyle('bar', 'x', [plot_data[0]['x']]);
}


// populate the demographic information
// function demographicInfo(new_data) {
//     var song_name = document.getElementById('song_name');
//     song_name.textContent = `Name: ${data[new_data]['name']}`;

//     var tempo = document.getElementById('tempo');
//     tempo.textContent = `Tempo: ${Math.round(data[new_data]['tempo'])}`;

//     var mode = document.getElementById('mode');
//     if (data[new_data]['mode'] == 0) {
//         mode.textContent = 'Mode: Minor'
//     } else {mode.textContent = 'Mode: Major'}

//     var explicit = document.getElementById('explicit');
//     if (data[new_data]['explicit'] == 0) {
//         explicit.textContent = 'Explicit: False'
//     } else {explicit.textContent = 'Explicit: True'}
    
//     var duration = document.getElementById('duration');
//     duration.textContent = `Duration(sec): ${Math.round(data[new_data]['duration_ms']/1000)}`;

//     var key = document.getElementById('key');
//     if (data[new_data]['key'] == 0) {key.textContent = 'Key: C'} 
//     else if (data[new_data]['key'] == 1 ){key.textContent = 'Key: C#'}
//     else if (data[new_data]['key'] == 2 ){key.textContent = 'Key: D'}
//     else if (data[new_data]['key'] == 3 ){key.textContent = 'Key: D#'}
//     else if (data[new_data]['key'] == 4 ){key.textContent = 'Key: E'}
//     else if (data[new_data]['key'] == 5 ){key.textContent = 'Key: F'}
//     else if (data[new_data]['key'] == 6 ){key.textContent = 'Key: F#'}
//     else if (data[new_data]['key'] == 7 ){key.textContent = 'Key: G'}
//     else if (data[new_data]['key'] == 8 ){key.textContent = 'Key: G#'}
//     else if (data[new_data]['key'] == 9 ){key.textContent = 'Key: A'}
//     else if (data[new_data]['key'] == 10 ){key.textContent = 'Key: A#'}
//     else if (data[new_data]['key'] == 11 ){key.textContent = 'Key: B'}

//     var popularity = document.getElementById('popularity');
//     popularity.textContent = `Popularity: ${data[new_data]['popularity']}`;


  
// }





graph()












