import './Home.css'
import React,{useState} from 'react';

const Home = () => {
    const [selectedFile, setSelectedFile] = useState();
	//const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		
	};

    const formHandler = (event) => {
      event.preventDefault();
      const formData = new FormData();

		formData.append('photo', selectedFile);

		fetch(
			'https://api-gallery-photo.herokuapp.com/photo',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
    
    return (
        <div className="home-form">
            <div className="form">
            <form className="form-data" onSubmit={formHandler}>
                <label>Choose photo to upload</label>
                <input type="file" name="photo" onChange={changeHandler} />
                <button type="submit" id="upload">Upload</button>
            </form>
            </div>
           
        </div>
    )
}

export default Home;