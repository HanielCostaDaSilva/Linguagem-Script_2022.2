function VerificarTriangulo(lado1,lado2,lado3){
    if (lado1 <= 0 || lado2 == 0 || lado3 <=0){
        return 'none'
    }
    else if (lado1 **2 === lado2 *lado3){
        return 'equilateral'
    }
    else{
        if ( (lado1 === lado2 || lado1===lado3 || lado2===lado3 )){
            return 'isoceles'
        }
        else{
            return 'scalene'
        }
    }
}

//=======testes
console.log(VerificarTriangulo(5,5,5))
console.log(VerificarTriangulo(150,150,150))
console.log(VerificarTriangulo(45,29,45))
console.log(VerificarTriangulo(10,12,13))
console.log(VerificarTriangulo(0,4,10))