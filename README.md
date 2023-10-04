# Country-Capital-Matcher

Implement a game to match countries with their capitals in Angular.

**Requirements**

Implement an Angular component that renders a simple game.
In the game, the player needs to match a country to its capital by clicking on appropriate buttons.

1. Your component should receive a data property in the following format (an object with the correct answer, where the keys are the names of the countries and the value of each key is the capital of the country)
<app-country-capital [data]="data" />
where data might look like this:
{ Germany: "Berlin", Azerbaijan: "Baku" )
2. A button should be displayed for each country and each capital. So, the example above would return four buttons: Germany, Berlin, Azerbaijan and Baku.
3. The buttons should be displayed in a random order.
4. Clicking a button should set its background color to blue (#0000ff).
5. Clicking another button should:
  - - remove both buttons if the correct country and capital pair have been selected;
  - - set the background color of both buttons to red ( #ff0000) if a wrong pair has been selected.
6. Assuming the previously selected pair was wrong, clicking another button should restore the wrong pair's default background colour and set the clicked button's background colour to blue (as in point 4).
7. When no buttons are left, display a message: Congratulations.


**Examples**

The correct answers in the model are:

- Poland - Warsaw
- German - Berlin
- Azerbaijan - Baku
- Papa New Guinea - Port Moresby

<img width="1450" alt="Screenshot 2023-09-21 at 10 10 23 PM" src="https://github.com/roopaljasnani/Country-Capital-Matcher/assets/89003845/5e95253f-d3da-428c-b9ed-1e829f30f303">
<img width="1076" alt="Screenshot 2023-09-21 at 10 58 43 PM" src="https://github.com/roopaljasnani/Country-Capital-Matcher/assets/89003845/84cf5b5d-8078-4e43-830d-908586199a5a">
