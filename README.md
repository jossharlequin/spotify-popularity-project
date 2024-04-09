# spotify-popularity-project
The goal of this project will be to analyze data from spotify which encompasses the auditory features of a song, the release date, and the popularity. The target variable for our machine learning model will be the popularity, scored from 0-100 where 0 is not recomended and 100 is highly recommended.

# Process
The data was retrieved from Spotify and cleaned by remova of 3 variables: Artist Name, Song Name, and Release Date. The two former were removed because they were not integer values while the latter was removed for inconsistent data. The Popularity variable was selected the Y predictive variable to be used in the future models.
Three predictive models were initially created: 2 K Neighbor, and 1 Neural Network. The first K Neighbor had an Accuracy of 17% and second had an accuracy of 75%. The Neural Network model showed the most promise with an initial accuracy of 61%.
The Neural Network model was adjusted until it reached an accuracy of 79%.

# Findings


