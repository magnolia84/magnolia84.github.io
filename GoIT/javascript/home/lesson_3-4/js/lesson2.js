var pageMaker = {
  bodyRef: document.body,

  createDivContainer: function() {
    var container = document.createElement('div');
    container.setAttribute("class", "container");
    return container;
  },
  createHeader: function() {
    var header = document.createElement('header');
    var divContainer = this.createDivContainer();
    var title = document.createElement('h2');
    title.setAttribute("class", "text-center");
    title.innerHTML = 'Тест по программированию';
    header.appendChild(divContainer);
    divContainer.appendChild(title);
    this.bodyRef.appendChild(header);
  },
  createContainer: function() {
    var divContainer = this.createDivContainer();
    this.bodyRef.appendChild(divContainer);
    return divContainer;
  },
  createForm: function(parent) {
    var form = document.createElement('form');
    form.setAttribute("role", "form");
    parent.appendChild(form);
    return form;
  },
  createQuestionBlock: function(parent) {
    var question = document.createElement('div');
    question.setAttribute("class", "question");
    parent.appendChild(question);
    return question;
  },
  createQuestionText: function(parent, txt) {
    var text = document.createElement('span');
    text.innerHTML = txt;
    parent.appendChild(text);
  },
  createQuestionCheckbox: function(parent, txt) {
    var checkboxDiv = document.createElement('div');
    checkboxDiv.setAttribute("class", "checkbox");
    var label = document.createElement('label');
    checkboxDiv.appendChild(label);
    var input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    label.appendChild(input);
    var text = document.createTextNode(txt);
    label.appendChild(text);
    parent.appendChild(checkboxDiv);
  },
  createButton: function(parent, txt) {
    var buttonDiv = document.createElement('div');
    buttonDiv.setAttribute("class", "col-md-12 text-center");
    var button = document.createElement('button');
    button.setAttribute("class", "btn btn-info btn-lg");
    button.setAttribute("type", "button");
    button.innerHTML = txt;
    buttonDiv.appendChild(button);
    parent.appendChild(buttonDiv);
  }
};

pageMaker.createHeader();
var divContainer = pageMaker.createContainer();
var form = pageMaker.createForm(divContainer);
var question1 = pageMaker.createQuestionBlock(form);
pageMaker.createQuestionText(question1, '1. Вопрос №1');
pageMaker.createQuestionCheckbox(question1, 'Вариант ответа №1');
pageMaker.createQuestionCheckbox(question1, 'Вариант ответа №2');
pageMaker.createQuestionCheckbox(question1, 'Вариант ответа №3');

var question2 = pageMaker.createQuestionBlock(form);
pageMaker.createQuestionText(question2, '2. Вопрос №2');
pageMaker.createQuestionCheckbox(question2, 'Вариант ответа №1');
pageMaker.createQuestionCheckbox(question2, 'Вариант ответа №2');
pageMaker.createQuestionCheckbox(question2, 'Вариант ответа №3');

var question3 = pageMaker.createQuestionBlock(form);
pageMaker.createQuestionText(question3, '3. Вопрос №3');
pageMaker.createQuestionCheckbox(question3, 'Вариант ответа №1');
pageMaker.createQuestionCheckbox(question3, 'Вариант ответа №2');
pageMaker.createQuestionCheckbox(question3, 'Вариант ответа №3');

pageMaker.createButton(form, 'Проверить мои результаты');
