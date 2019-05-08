const sha256= require('crypto-js/sha256');

class Block{
    constructor(timestamp, data ,previoushash=""){
        this.timestamp=timestamp;
        this.data=data;
        this.previoushash=previoushash;
        this.hash=this.callculateHash();
    }
     callculateHash(){
        return sha256(this.timestamp+ JSON.stringify(this.data)+this.previoushash).toString();
    }

}

class BlockChain{
    constructor(){
        this.chian=[this.generateGenesisBlock()];
    }

    generateGenesisBlock(){
        return new Block("2019-05-07", "genesis", "0000")
    }

    getLatestblock(){
        return this.chian[this.chian.length-1];
    }

    addChain(newBlock){
        newBlock.previoushash=this.getLatestblock().hash;
        newBlock.hash=newBlock.callculateHash();
        this.chian.push(newBlock);
    }

    isblockchainValid(){
        for(let i=1; i<this.chian.length; i++){
            const currentBlock=this.chian[i];
            const previousBlock=this.chian[i-1];

            if(currentBlock.hash !== currentBlock.callculateHash()){
                return false;
            }
            if(currentBlock.previoushash !== previousBlock.hash){
                return false;
            }
        }
        return true;

    }
    
}

const josscoin=new BlockChain();


const newBlock= new Block("2019-05-07", { amount: 500 });

josscoin.addChain(newBlock);
console.log(josscoin.isblockchainValid());

josscoin.chian[1].data="hacked";

console.log(josscoin.isblockchainValid());

