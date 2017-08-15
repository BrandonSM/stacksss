// file extension with .json has to be specified. Webpack assumes all are .js unless otherwise specified.
import data from './LibraryList.json'; 

// whenever the reducer runs, it will always return an array of data
// data = array of objects .. eg... [{object},{object},{object}]
export default () => data;