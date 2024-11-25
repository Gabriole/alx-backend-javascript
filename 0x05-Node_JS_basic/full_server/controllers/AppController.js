/**
 * Contains the miscellaneous route handlers.
 * @author Ismail Mouhtaram <https://github.com/Gabriole>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
