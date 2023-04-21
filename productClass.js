class Product{
    constructor(_name, _price){
        this.name = _name;
        this.price = _price;
    }

    printInfo(){
        let info = this.name + ": " + this.price + "kr"
        console.log(info);
        return info;
    }
}