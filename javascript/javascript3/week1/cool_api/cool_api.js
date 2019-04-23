fetch('http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève')
    .then(response => response.json())
    .then((response) => {
        console.log(response);
    });

    /*
    This is the cool api, gives the transportation information of switzerland, it is just an example, with this one
    there is a lot of information about different cities' transportations.
    The information gathered by this api is consits of objects and arrays.

    connections: it is an array of objects
    from: is an object which consists of arrays
    stations: it is an object consists of number of arrays.

    In the api fetch request i entered the city "Geneve", but we can change the city to get the transport information
    of any other city   
    */