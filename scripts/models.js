// add the path to models

        const MODEL_URL = "./models";
        // // load the models

        labels = [];
        // const labels = ["jason","jamal","ewurafua"];


        faceapi.loadSsdMobilenetv1Model(MODEL_URL);
        faceapi.loadFaceLandmarkModel(MODEL_URL);
        faceapi.loadFaceRecognitionModel(MODEL_URL);

        $.get("./getfilenames.php", function(data){
                labels = JSON.parse(data);
                // alert(labels);

        })

        // alert(labels);
        var counter_empty = 0;
        var counter = 0;
  async function recognize() {
            let input = document.getElementById('webcam');
            let canvas = document.getElementById('overlay');

            let fullFaceDescriptions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors();
            fullFaceDescriptions = await faceapi.resizeResults(fullFaceDescriptions, canvas);

            // await faceapi.draw.drawDetections(canvas, fullFaceDescriptions); //to add a bounding box

            // const labels = ['jason','jamal','ewurafua', 'jamalpelpuo'];

            // alert(labels);
            const labeledFaceDescriptors = await Promise.all(
                labels.map(async label => {
                    // fetch image data from urls and convert blob to HTMLImage element
                    const imgUrl = `./images/${label}.png`;
                    const img = await faceapi.fetchImage(imgUrl);

                    // detect the face with the highest score in the image and compute it's landmarks and face descriptor
                    const fullFaceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();

                    if (!fullFaceDescription) {
                        throw new Error(`no faces detected for ${label}`);
                    }

                    const faceDescriptors = [fullFaceDescription.descriptor];
                    return new faceapi.LabeledFaceDescriptors(label, faceDescriptors);
                })
            )

            // 0.6 is a good distance threshold value to judge
            // whether the descriptors match or not
            const maxDescriptorDistance = 0.6;
            const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, maxDescriptorDistance);

            const results = await fullFaceDescriptions.map(fd => faceMatcher.findBestMatch(fd.descriptor));

            // the results are here
            // alert(results);
            console.log(results);

            if(results.length != 0){
                results.forEach(element => {
                if(`${element._label}` != $("#acc-name").text()){
                    alert("Please make sure you're the one sitting behind the camera");
                    counter = counter + 1;
                }
                console.log(`Face found is ${element._label}`);
            });
            }else{
                alert("Please sit properly and face the camera");
                counter_empty = counter_empty + 1;
            }

            if(counter == 3 || counter_empty == 10){
                window.location = "http://localhost/jason/oesmaster/account.php?q=4";
            }
        }
  