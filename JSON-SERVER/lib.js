//=======================================PROMISES===========================//

/**
 * Uses promice 
 */


// class HTTP {
//     // Make HTTP GET request
//     get(url) {
//         return new Promise((resolve, reject) => {
//             fetch(url)
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .catch(err => reject(err))
//         });
//     };

//     // Make HTTP POST request
//     post(url, data) {
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: 'POST',
//                 headers: { 'Content-type': 'application/json' },
//                 body: JSON.stringify(data)
//             }
//             )
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .catch(err => reject(err))
//         });
//     };

//     // Make HTTP PUT request
//     put(url, data) {
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: 'PUT',
//                 headers: { 'Content-type': 'application/json' },
//                 body: JSON.stringify(data)
//             }
//             )
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .catch(err => reject(err))
//         });
//     };

//     // Make HTTP DELETE request
//     delete(url) {
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: 'DELETE',
//                 headers: { 'Content-type': 'application/json' },
//             }
//             )
//                 .then(res => res.json())
//                 .then(() => resolve('Resorse deleted'))
//                 .catch(err => reject(err))
//         });
//     };
// }


// let http = new HTTP()


//================================ASYNC/AWAIT=======================================//

/**
 * Uses async/await
 */


// class HTTP {
//     // Make HTTP GET request
//     async get(url) {
//         const response = await fetch(url);
//         const responseData = response.json();
//         return responseData;
//     };

//     // Make HTTP POST request
//     async post(url, data) {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify(data)
//         }
//         );
//         const responseData = response.json();
//         return responseData;
//     };

//     // Make HTTP PUT request
//     async put(url, data) {
//         const response = await fetch(url, {
//             method: 'PUT',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify(data)
//         }
//         );
//         const responseData = response.json();
//         return responseData;
//     };

//     // Make HTTP DELETE request
//     async delete(url) {
//         const response = await fetch(url, {
//             method: 'DELETE',
//             headers: { 'Content-type': 'application/json' },
//         }
//         );
//         const responseData = 'Resorse deleted...';
//         return responseData;

//     };
// }


//=======================================================================//













//-------------------------------------------------------//
// class HTTP {
//     get(url) {
//         return new Promise((resolve, reject) => {

//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => resolve(data)).
//                 catch((err) => reject(err))
            
//         })
//     }

//  post(url , obj) {
//         return new Promise((resolve, reject) => {

//             fetch(url, obj)
//                 .then(response => response.json())
//                 .then(data => resolve(data)).
//                 catch((err) => reject(err))
            
//         })
//  }
    
//      put(url, obj) {
//         return new Promise((resolve, reject) => {

//             fetch(url, obj)
//                 .then(response => response.json())
//                 .then(data => resolve(data)).
//                 catch((err) => reject(err))
            
//         })
//     }

//  delete(url, options) {
//         return new Promise((resolve, reject) => {

//             fetch(url)
//                 .then(response => response.json())
//                 .then(() => resolve(data)).
//                 catch((err) => reject(err))
            
//         })
//     }

// }

// let http = new HTTP()
//-------------------------------------------------------//



