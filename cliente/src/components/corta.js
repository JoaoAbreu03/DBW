function corta(path){
    if(path != undefined && path != "" )
        path = path.replace("../cliente/public/images/",'').replace(" ",'')
    else
        path = "imgg.png"
    return path
}
export {corta}