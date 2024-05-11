function corta(path){
    
    path = path.replace("../cliente/public/images/",'').replace(" ",'')
    return path
}
export {corta}