

//movie App using API


//UI-->API layer------>Server--------->Data base

//these are communicate each otehr request and response




//  serach movie------->API------;>Server------->DB
      //if movie found show dta

    //if not found

//send data to API and give response wheteher it exists or not


//We used here OMDB API key






let api='https://www.omdbapi.com/?apikey=a68f231f&t='






let title=document.querySelector('#title')
let desc=document.querySelector('#desc')

let genre=document.querySelector('#genre')
let actors=document.querySelector('#actors')
let directors=document.querySelector('#directors')
let awards=document.querySelector('#awards')
let collection=document.querySelector('#collection')
let lng=document.querySelector('#lng')
let ratings=document.querySelector('#ratings')
let poster=document.querySelector('#poster')
let container=document.querySelector('#container')
// let title=document.querySelector('#title')

let error=document.querySelector('#error')

let suggestion=document.querySelector('.suggestion')


// container.classList.add('hidden') //to hide the default
//whenclick btn its visible







let spinner = document.getElementById('spinner');

function search(){


    let movieInput=document.querySelector('#movieName')
    let query=api+movieInput.value.trim();




    if(movieInput.value.trim()===''){

        error.innerText="Please enter a movie name!"
        // container.classList.add('hidden')
        return
    }



    error.innerText = '';
    container.classList.add('hidden');   // hide previous movie data
    spinner.classList.remove('hidden');



    fetch(query).then(data=>data.json()).then(data=>{

        //if movie doesnt exist 


        error.innerText=""//it will be hidden


        if(data.Error==='Movie not found!'){
            
            error.innerText="Movie not found!"
            
            // document.querySelector('#error')

        }


        else{

            container.classList.remove('hidden')

            title.innerText=data.Title//everthing work fine

       
            genre.innerText=data.Genre
            desc.innerText=data.Plot
            actors.innerText=data.Actors
            directors.innerText=data.Director 
            awards.innerText=data.Awards
            collection.innerText=data.BoxOffice
            lng.innerText=data.Language
            ratings.innerText=data.imdbRating
            poster.src=data.Poster


            if(data.imdbRating>7){

                suggestion.innerText='Worth Watching'
            }
            else if(data.imdbRating>6 && data.imdbRating<7){

                suggestion.innerText="Can Watch"
            } 

            else{
                suggestion.innerText="Time Waste"
            }
        }

        
    
    })

}




window.onload = function () {
    search("Inception");
};
