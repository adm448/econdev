----
DATA
----

The original data for this visualization comes from the ITU in an excel format.
https://www.itu.int/en/ITU-D/Statistics/Documents/statistics/2017/Fixed_broadband_2000-2016.xls

I cleaned up the data in excel to focus on just the indicator I wanted -- namely, fixed broadband subscriptions per 100 habitants.
I also added UN country codes for all countries.  I did this manually.
Then I simply saved the file in .csv format as:
econdev/data/Fixed_broadband_200-2016_with_country_codes.csv

The script for the visualizations (vis1_global_internet_subscriptions.js) calls a csv format and all you have to do is select the value (e.g. year) in the column function.

In doing my analysis, it became clear that my indicator of fixed broadband subscriptions probably does not capture the increase in internet access via mobile connections in many developing countries.  On a future iteration, it may be advisable to merge the two data sets or compare them side-by-side.

-------------
VISUALIZATION
-------------

In terms of edits to the visualization, I went from a multihue color spectrum to a single hue (blue).  I also changed the label titles to reflect my data set.  It doesn't sound like a lot, but I went through multiple iterations.  Our team also spent a good deal of time tweaking our styles to get a consistent feel across all the pages.

On a next iteration, I would like to try to adjust the legend labels so that they are consistent for both time frames.  That would make comparison across years easier. I would also like to add a title (e.g., the year of the dataset) to the leged to clarify which time series one is looking at.

With lots of practice, I would like to try to include a time slider in the visualization to show how the indicator has changed over time.

---------
BRANCHING
---------

I created a number of branches to develop different parts of my project page.  I deleted several of them after the project to clean-up the github repo.  I'm not sure if this affects the "network view" at all.
