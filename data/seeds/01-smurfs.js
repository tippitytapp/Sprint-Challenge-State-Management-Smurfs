
exports.seed = function(knex) {

      return knex('smurfs').insert([
        {id: 1, name: 'Smurfette', age: 100, height: 3.1, img_url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F692921092647075656%2F&psig=AOvVaw0AZ2WARwtvEW37A8SGza-h&ust=1593958362644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjf9uLjs-oCFQAAAAAdAAAAABAI'},
        {id: 2, name: 'Papa Smurf', age: 546, height: 4.2, img_url:'https://vignette.wikia.nocookie.net/smurfs/images/1/12/Papasmurfmovie2017.png/revision/latest?cb=20161016005227'},
        {id: 3, name: 'Clumsy Smurf', age: 101, height: 3.6, img_url:'https://vignette.wikia.nocookie.net/smurfs/images/5/58/Clumsy_Smurf_2017Movie.png/revision/latest?cb=20161016004824'},
        {id: 4, name: 'Grouchy Smurf', age: 164, height: 3.7, img_url:'https://vignette.wikia.nocookie.net/smurfs/images/a/a2/Movie_Grouchy_Smurf.png/revision/latest?cb=20130805132136'}
      ]);
};
