import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import './PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")


  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setTitle();
      setDescription();
    }
    setIsLoading(false);
  }, [identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(title,description);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
  const handleChange=(e)=>{
      if(e.target.name==="title"){
          setTitle(e.target.value)
      }
      if(e.target.name==="description"){
          setDescription(e.target.value)
      }


  }

  return (
    <form className={`place-form form-control`}  onSubmit={placeUpdateSubmitHandler}>

      <label htmlFor={"title"}>{"Title"}</label>
      <input
        id="title"
        element="input"
        name="title"
        type="text"
        label="Title"
        errorText="Please enter a valid title."
        onChange={handleChange}
        value={title}
        
        
      />
      <br/>
      <label htmlFor="description">{"Description"}</label>
      <input
        id="description"
        element="textarea"
        name="description"
        label="Description"
        errorText="Please enter a valid description (min. 5 characters)."
        onChange={handleChange}
        value={description}
       
      />
      <Button type="submit" disabled={false}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
