module.exports = () => {
    return class Menu {
        title
        preparationTime
        picture
        
        constructor(title, preparationTime, picture){
            this.title = title;
            this.preparationTime = preparationTime;
            this.picture = picture;
    
        }
    }

    
}