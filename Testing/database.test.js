//unit tests with jest
var database =  require('../seedDB.js')


//test if function exists
test('has function that get data from API', async () => {
	expect.assertions(1);
	expect(typeof database.getDataFromAPI).toEqual('function');
})
//test length
// test('function returns data from API', async () => {
// 	expect.assertions(1);
// 	return expect(database.getDataFromAPI( (data, events) => {
// 		return data;
// 	})).resolves.toBe(!undefined);
// })
	//test JSON
	//test invalid get request



//test format data funciton  
	// test output data



//test if data is saved into databases


// test('the data is peanut butter', async () => {
//   expect.assertions(1);
//   const data = await fetchData();
//   expect(data).toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });