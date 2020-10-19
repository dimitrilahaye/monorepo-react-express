const base = 'react-typescript';
// prompts displayed by yeoman during generation
const prompting = () => {
	return [
	    {
	        when: answers => answers.projects.includes(base),
	        type: 'input',
	        name: base + '.applicationName',
	        required: true,
	        message: `What is the name of your ${base} application?`
	    }
	];
}
// list of all the templates path into the boilerplate/templates folder
// this method get answers variables in order to use (if needed) some logic to choose
// which templates exporting in the destination path.
const writing = ({ applicationName }) => {
	return ['src/App.tsx', 'package.json'];
}

module.exports = {
    prompting, writing
}