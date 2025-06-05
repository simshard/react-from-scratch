export async function getPuppies ()  {
      try {
    const response = await fetch("http://localhost:8000/api/puppies"
      , {
      headers: {
        accept: "application/json",
      },
    }
    );
    if(!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    const {data} = await response.json();
    return(data);
    }
    catch (error) {
      console.error(error);
      throw error;
    }
}

export async function toggleLikedStatus(puppyId: number) {
  try {
    const response = await fetch(`http://localhost:8000/api/puppies/${puppyId}/like`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error (errorData.message); 
    }

     const { data: updatedPuppy } = await response.json();
    // console.log(updatedPuppy);
    return updatedPuppy;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createPuppy(formData: FormData) {
  try {
    const response = await fetch("http://localhost:8000/api/puppies", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}