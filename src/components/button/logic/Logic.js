

const compareChoices = ( {user, computer} ) => {

    let result = "";

    if(computer === user) {
      result = "Oavgjort!"
    } else if ((computer === 2 && user === 3) || (computer === 3 && user === 1) || (computer === 3 && user === 2)) {
      result="Du har vunnit!"
    } else {
      result = "Du har förlorat!"
    }

    return result;

  }  

export compareChoices

