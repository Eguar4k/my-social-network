# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

HOT KEYS

CTRL-ALT-V - make const;

Курс "React JS - путь самурая 1.0", уроки, практика
https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8

Функциональная компонента - это компонента которая записывается как функция, прнинимает в себя props как аргументы и возвращает JSX разметку.

13. Уроки React JS - git-репозиторий

SCV - sistem control of version

2.  GIT для новичков

git clone (клонирование репозитория)
gitk --all& (открыть графическую оболочку гита, чтобы позырить все коммиты)
ctrl + insert (копировать в буфер обмена)
shift + insert (вставить из буфера обмена)
git checkout commit-number (переключится на нужный коммит)

14. Уроки React JS - добавление поста на стену (зачатки FLUX-концепции)
15. Уроки React JS - прокидываем callback через props
16. Уроки React JS - onClick, ref, VirtualDOM

value, каждый символ в textarea, мы берем из BLL, в стейте.Делаем мы это через props.Чтобы добавить каждый символ в стейт, т.е.наше value, мы используем обработчик onChange.Программируем наш onChange, чтобы value(символ который мы нажали) передавался в стейт.Делаем это через функцию update, которая должна лежать состейтом в BLL.Прокидываем эту функцию через props в нашу компоненту.В обработчике пишем, вызови update(со значениемvalue(символ)).т.е.то, что мы ввели, через функцию записывается в какой - то массив в стейте.А textarea говорит: ОСейчас кто - то ввел символ и мой value стал тем, что ввели.Быстренько отображаю это, в поле ввода.Получается,сначала поменялся state в BLL, а потом Ui в textarea.Это концепция Flux архитектуры.

35. Уроки, Курс React JS - callback, subscribe, observer

В state мы не можем импортировать функцию renderEntireTree, но мы можем ее туда передать через subscribe,
который вызывается в index.js.После чего, созданная функция renderEntireTree в state переопределяется на ту,
которую мы передали в subscribe.И теперь, когда мы добавляем пост, в state вызывается эта функция renderEntireTree

36. Уроки, Курс React JS - про ООП поверхностно (зачем нам объекты)

Про this, как это работает - this нужен для того, например у вас есть функция (действие), которая используется разными объектами и вы пишите внутри нее this.свойство*или*еще_что-то, так вот это действие будет сделано для того объекта в контексте которого вы вызвали этот this, ну как-то так. Например внутри конструктора очень часто пишут this.name = name, this.age = age и соответственно в аргументы приходит имя и возраст - constructor(name, age){...}; и потом у вас есть много объектов с пользователями и им в скобках(аргументах) вы передаете(пишите) имя и возраст например user.('Vasya', 23); все это дело попадает в конструктор и слово this будет иметь ссылку на объект user, т.к. this будет находится в контексте этого объекта, и добавит ему свойства, которые передали и так будет со всеми user1 или user2 и т.д., а конструктор 1. По этому внутри объекта тоже пишут this и оно имеет ссылку на этот объект, т.к. находится в его контексте, , может кому-то поможет.

37. Уроки, Курс React JS - store, state, ООП, рефакторинг

Мы просто передаем store в index.js. И передаем посредством обращения к свойству объекта через точку. Нижнее подчеркивание никак не меняет ситуацию, это просто договорённость разработчиков, что это свойство и его значение трогать не нужно. .bind() позволяет закрепить контекст передаваемой функции (метода). Очень важно, что именно ПЕРЕДАВАЕМОЙ, а не ВЫЗЫВАЕМОЙ. Это очень тонкий момент.

38. Уроки, Курс React JS - dispatch и action

action - это объект, который описывает действие, которое нужно совершить и имеет при себе обязательное свойство "type" с текстовым содержимым обозначающие действие, при необходимости может иметь при себе дополнительные свойства для передачи данных.

"В месте вызова локальной функции onPostChange() через props передаётся store-вский метод dispatch. Здесь же создаётся объект action. В качестве 1-го свойства type определяем значение 'UPDATE-NEW-POST-TEXT', 2-е свойство newText cо значением text. В метод dispatch в качестве входного параметра передаём объект action. Всё это летит в место нахождения метода dispatch, т.е. в store (state.js) и там для отработки логики проверяется условие - чему равно action.type. При этом изменение в UI, которое мы зафиксировали через свойство newText используем для изменения \_state.profilePage.newPostText в BLL..."

https://www.youtube.com/watch?v=UGapN-hrekw

39. - Уроки, Курс React JS - action creator, action type

Создание action - дело опасное. Почему? Потому что нужно создать правильный объект с правильным не только типом, но и ещё с правильным набором свойств, необходимых именно для этого типа экшена (action). Кто определяет правильность этого набора сво-в и самого типа? Бизнес!!!! Store! Стор (хранилище) у нас управляет состоянием и его изменением. Он определяет, КАКОЙ объект должен к нам прийти через dispatch, чтобы мы могли корректно его использовать для трансформации стейта (state)

Поэтому мы инкапсулируем логику создания таких объектов в отдельную функцию - action creator - и отправляем его в store - поближе в бизнес логике!

Ах да, тип экшена... Это строка. Что-то вроде ИМЕНИ экшена. Нельзя опечаться ни в одном символе, иначе наш логика обработки не сможет соотнести этот экшен с нужной веткой обработки. Поэтому выносим названия экшенов (action type) в строковую константу! В строковые константы)) Экшенов же у нас много ;)

S. Принцип единственной ответственности(Single responsibility)
O. Принцип открытости/закрытости (Open-closed)
L. Принцип подстановки Барбары Лисков (Liskov substitution)
I. Принцип разделения интерфейса (Interface segregation)
D. Принцип инверсии зависимостей (Dependency Invertion)

40. - React JS Практика - добавление Сообщения

мы делали ref для текстерии, а здесь сделали при помощи event.target.value? Ты вроде бы говорил, что там без ref пока не обойтись.
NavLink & Route - два независимых элемента (компонента),NavLink - меняет URL, а Route отслеживает изменения URL и подставляет свое значение (данные).

41. - riber) об изменении state, и вызываeт обновленный state для перерисовки. После рефакторинга : каждый reducer получает свой кусоReact JS Практика - reducer (почти redux)

reducer - чистая функция принимающая state & action возвращающая new state. На данный момент action (объект у которого есть как минимум свойство type) -> из Reacta(UI), мы его диспатчим и он изменяет state, после этого store уведомляет подписчиков (subscк state и возвращает новый, если action его меняет, если нет остовляет как и было.

42. - React JS Практика - Redux
      import {combineReducers, legacy_createStore as createStore} from "redux";

43. React JS Практика - container component (контейнерная компонента)

(1) DUMB-Компоненту (призентационная компонента ПК) нужно оставить чистой (без добавления store)
(2) Для того чтобы пункт 1 осуществить, нужно создать компоненту-оболочку или компоненту-контейнер (КК), которая и будет содержать store и все прочее из мира BLL.

В ПК передаем данные из КК функциями колбэками (addPost & onPostChangeContainer).
Функции обработчиков событий в ПК (onAddPost & onPostChange).
onPostChange -> принимает изменения в textarea, присваевает значение изменений в textarea, прокинутой через upNewPostText в props КК, и диспачится в onPostChangeContainer.

(3) Компонента-контейнер содержит в себе DUMB-компоненту (на то она и контейнер) и в JSX разметке рисует её передавая ей все необходимое пропсами.

44. - React JS Практика - Context API
      Создаем объект контекста.
      const MyContext = React.createContext("Hello");
      В скобках указывается значение по-умолчанию, котрое возьмет Consumer, если не получит Provider.

Provider только получает значение. Он ничего никуда не передает.

<!-- (<MyContext.Provider value = "То, что хотите передать">
</MyContext.Provider> -->

Значение попадает в приватное cвойство \_currentValue. Но в JS нет же привата, так что можно в наглую импортировать наш класс туда, куда нам надо и

<!-- <div>MyContext._currentValue</div> но мы так делать не будем.  -->

Поэтому

<!-- <MyContext.Consumer>
    {
        text(Тут лежит то, что схватил провайдер) => <div>text</div>
    }
</MyContext.Consumer>) -->

"TypeError: render is not a function"
На самом деле это не требует новой строки, а требует, чтобы вы отображали один дочерний элемент, который является функцией. Когда вы пишете пробел между Consumer и фигурной скобкой, этот пробел воспринимается, как пустая строка, а за ней идет функция, т е дочерних элементов становится два! [' ', [Function]]. Пишите без пробела <Consumer>{...} или переносите фигурную скобку на новую строку, тк новая строка не создает текстовый узел в виде пустой строки "".

Ответ на "почему именно так" видимо кроется в исторически сложившихся внутри команды правилах по поводу парсинга JSX - так нагляднее ведь в JSX элементе у вас находится вложенный объект, а не кусок объекта конкатенирующий в строке с

45. - React JS практика - connect, mapStateToProps, mapDispatchToProps

Интересные моменты:

Делали фуллстек - бэк на express (кроме джаваскрипта ж ничё не знаем), бд - mongo, для отображения верстки - handlebars. Деплоил сам на digitalocean, как прокси-сервер использовал nginx.

Деплой — процесс выкладки новой версии сайта на сервер (или сервера).
Задеплоить происходит от английского «to deploy», что означает «приводить в действие, разворачивать». В программировании задеплоить означает развернуть новую версию программы.

Парсинг (parsing) — это сбор информации из сторонних источников и сайтов для использования полученных данных в различных целях, от аналитики до копирования, простыми словами, это сбор данных из различных источников. Парсить можно с помощью специальных программ, а также языка программирования
Парсинг — это автоматизированный сбор и структурирование информации с сайтов при помощи программы или сервиса. Эта программа называется парсер и её задачей является сбор информации в соответствии с заданными параметрами. Например, при помощи парсинга сайтов можно создать описание карточек товаров онлайн-магазина.
