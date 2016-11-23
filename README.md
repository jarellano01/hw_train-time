# Train Time
Train Time was one of my first assignments where I had the opportunity to test out Google's Fire Base. 
It's a simple app where you can add a train destination as well as it's first departure time. You add it's frequency and then it will add the record to a firebase database. The table is generated using jquery and is updated anytime that the firebase api hears a change in the database. "Next Arrival" and "Will Arrive" value are not stored in the database but rather are calculated on table refresh. 

The main logic for the game may be found under assets/js/main.js

## Technologies Used
- Firebase for the database
- Moment JS for time formatting
- jquery for table generation

## Live Website
The live website can be found in the link below:

https://jarellano01.github.io/hw_train-time/

##Contribute 
Feel free to use the code in any way. If you want to contribute: 

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
