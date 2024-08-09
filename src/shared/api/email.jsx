// const subscribtionEmail = (email) => {
//     return fetch('http://localhost:3000/subscribtionEmail', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             email: email,
//         }),
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch((error) => {
//         console.error('Ошибка:', error);
//     });
// }

const subscribtionEmail = async (email) => {
    try {
        const response = await fetch('http://localhost:3000/subscribtionEmail', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            }),
        })
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export { subscribtionEmail };
