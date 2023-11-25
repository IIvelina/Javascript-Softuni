function solve(array){

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const numberOfSongs = Number(array[0]);
    const typeListFilter = array[array.length - 1];
    const songs = [];

    for (let i = 1; i <= numberOfSongs; i++) {
        const [typeList, name, time] = array[i].split('_');
        const song = new Song(typeList, name, time);
        songs.push(song);
    }

    if (typeListFilter === 'all') {
      
        songs.forEach(song => console.log(song.name));
    } else {
        const filteredSongs = songs
            .filter(song => song.typeList === typeListFilter)
            .forEach(song => console.log(song.name));
    }

}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );