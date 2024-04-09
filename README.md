# spotify-popularity-project
The goal of this project will be to analyze data, using machine learning algorithms, from spotify which encompasses the auditory features of a song and the popularity. The target variable for our machine learning model will be the popularity, scored from 0-100 where 0 is not recomended and 100 is highly recommended.

# Contents
The contents of this repository include the jupyter notebooks where data cleaning and the machine learning algorithms are run. A CSV file recording the modifications made to the machine learning algorithms to improve performance. And the HTML/Javascript used to create the webpage where results of the ML models are displayed. The SQL query used to create the table in postgress and the data retrieved from postgress as a csv.    

# Process
The data was retrieved from Spotify and cleaned by removal of 4 variables: Artist Name, Song Name, Release Year, and Release Date. The two former were removed because they were not integer values while the latter two were removed for inconsistent data. The Popularity variable was selected as the Y predictive variable to be used in the future models. 

Four predictive models were initially created: 2 K Neighbor, 1 Random Forest, and 1 Neural Network. The first K Neighbor had an Accuracy of 17% and the second had an accuracy of 75%. The Random Forest performed the highest, over the Neural Network, by a slight margin, and had a final accuracy score of 79%. The Neural Network model showed the most promise initially with an beginning accuracy of 61%. The Neural Network model was adjusted until it reached an accuracy of 79%.

Different binning methods were used during the Neural Network and Random Forest modeling processes with differing results. The initial binning method was splitting the target variable into five bins which encompassed 0-20, 20-40, 40-60, 60-80, 80-100. This binning method proved to be innefectual because of the size disparities of the groups. Reducing the data into four, three, and two bins following the same methodology also yielded disparate groupings. After the testing had been done using these methods, the decision was made to switch over to a binning method which was based on the number of datapoints in each group. Like the first binning method, this was done originally into five groups, this method of binning yielded the lowest accuracy score of the neural network variations tested. After attempting the same with both four and three, and yielding scores that were lower than required, two groups was settled on for analyzing the data. Although the first binning method used to split the data into two groups had the highest overall accuracy with a score of 83% accuracy, this method shouldn't be used due to the size disparities between the lower and upper groupings.  

# Findings
Using the Random Forest model and the Neural Network, an accuracy of 79% was achieved when the target variable was grouped into two equally sized bins. The highest performing model, the Random Forest had a final accuracy score of 79.00%. The Neural Networks highest accuracy score was 78.96%. Using the Random Forest model, the features were ranked based off of importance.

Feature Imprtances
  Acousticness 30.3%
  Loudness 12.5%
  Duration 8.2%
  Speechiness 7.7%
  Valence 6.9%
  Danceability 6.6%
  Liveness 6.1%
  Tempo 5.7%
  Energy 5.6%
  Instrumentalness 5.2%
  Key 2.6%
  Explicitness 1.3%
  Mode .5%
