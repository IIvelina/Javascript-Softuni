function solve(array){

    class Piece{
        constructor(piece, composer, key){
            this.piece = piece;
            this.composer = composer;
            this.key = key;
        }
    }

    let pieces = [];

    let length = Number(array[0]);
    array.shift();

    for (let i = 0; i < length; i++) {
        
        let current = array[i];
        let splitCurrent = current.split("|");
        let piece = splitCurrent[0];
        let composer = splitCurrent[1];
        let key = splitCurrent[2];
        
        let newPiece = new Piece(piece, composer, key);
        pieces.push(newPiece);
        
    }

    for (let i = 0; i < length; i++) {
        array.shift();
    }

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let splitCurrent = current.split("|");
        let command = splitCurrent[0];
            if (command === "Stop"){

                for (const piece of pieces) {
                    console.log(`${piece.piece} -> Composer: ${piece.composer}, Key: ${piece.key}`);
                }

            break;
            }else if(command === "Add"){
                let piece = splitCurrent[1];
                let composer = splitCurrent[2];
                let key = splitCurrent[3];

               // let newPiece = new Piece(piece, composer, key);

                if (!pieces.some(p => p.piece === piece)){
                    let newPiece = new Piece(piece, composer, key);
                    pieces.push(newPiece);
                    
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }else{

                    console.log(`${piece} is already in the collection!`)
                }
            }else if (command === "Remove"){
                let piece = splitCurrent[1];
                let index = pieces.findIndex(p => p.piece === piece);
                

                if(index === -1){
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }else{
                    pieces.splice(index,1);
                    console.log(`Successfully removed ${piece}!`);
                }
            } else if (command === "ChangeKey") {
                let piece = splitCurrent[1];
                let newKey = splitCurrent[2];
            
                let index = pieces.findIndex(p => p.piece === piece);
            
                if (index === -1) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    pieces[index].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                }
            }
        
    }
    
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]  
  );

