//unit tests with jest
var database =  require('../seedDB.js')


//test data recieved from API
test('Receiving sample data from API', async () => {
	expect.assertions(1);
	console.log(database.getDataFromAPI);
	var sampleData = await database.getDataFromAPI()
	console.log('testing: ', sampleData);
	expect(sampleData.length).toBe(!undefined);
})
	//test length
	//test JSON
	//test invalid get request

test('Receiving sample data from API and resolve function', async () => {
	expect.assertions(1);
	return expect(database.getDataFromAPI((data) => {
		data.results
	}).resolves.toEqual(!undefined)
})

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