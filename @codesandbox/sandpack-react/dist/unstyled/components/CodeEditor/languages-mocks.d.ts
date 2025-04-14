export declare const html = "\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>HTML 5 Boilerplate</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n  </head>\n  <body>\n  <script src=\"index.js\"></script>\n  </body>\n</html>\n";
export declare const js = "function foo(params) {\n  return params\n}\n\nconst baz = (foo) => {\n  return foo\n}\n\nconst array = [];\nconst object = {};\nconst regex = new Regex(//);\n\nconst expr = 'Papayas';\nswitch (expr) {\n  case 'Oranges':\n    console.log('Oranges are $0.59 a pound.');\n    break;\n  case 'Mangoes':\n  case 'Papayas':\n    console.log('Mangoes and papayas are $2.79 a pound.');\n    // expected output: \"Mangoes and papayas are $2.79 a pound.\"\n    break;\n  default:\n    console.log(`Sorry, we are out of ${expr}.`);\n}";
export declare const jsx = "function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\nexport default function App() {\n  return (\n    <div>\n      <Greeting name=\"Divyesh\" />\n      <Greeting name=\"Sarah\" />\n      <Greeting name=\"Taylor\" />\n    </div>\n  );\n}";
export declare const css = "body {\n  background-color: lightblue;\n}\n\nh1 {\n  color: white;\n  text-align: center;\n}\n\np {\n  font-family: verdana;\n  font-size: 20px;\n}";
export declare const less = "@width: 10px;\n@height: @width + 10px;\n\n#header {\n  width: @width;\n  height: @height;\n}";
export declare const vue = "<template>\n<div class=\"column is-12\">\n    <label class=\"label\" for=\"email\">Email</label>\n    <p :class=\"{ 'control': true }\">\n        <input v-validate=\"'required|email'\" :class=\"{'input': true, 'is-danger': errors.has('email') }\" name=\"email\" type=\"text\" placeholder=\"Email\">\n        <span v-show=\"errors.has('email')\" class=\"help is-danger\">{{ errors.first('email') }}</span>\n    </p>\n</div>\n</template>\n\n<script>\n  export default {\n  name: 'basic-example'\n};\n</script>";
export declare const shell = "#!/bin/sh\n\nEXAMPLE=\"drawn joyed\"\n\n# Prints the EXAMPLE variable\nfunction show-example() {\n  echo $EXAMPLE\n}";
export declare const python = "import os\n\napi_token = os.environ['API_TOKEN']\n\n# Prints the api_token variable\nprint(\"API token:\", api_token)";
