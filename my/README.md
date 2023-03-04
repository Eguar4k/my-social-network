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

13. Уроки React JS - git-репозиторий (под видео 2. GIT для новичков)

SCV - sistem control of version

git clone + путь к репозиторию (клонирование репозитория)
git status (статус текущего локального репозитория)
git add + путь к репозиторию (отдача файла пот контроль гита)
git commit - am " coment for fix" (фиксация гитом версии файла)
git push - (отправить все закомиченные изменения в репозитории на сервер)
git pull - (забрать свежие изменения в репозитории на сервере)

gitk --all& (открыть графическую оболочку гита, чтобы позырить все коммиты)
ctrl + insert (копировать в буфер обмена)
shift + insert (вставить из буфера обмена)
git checkout commit-number (переключится на нужный коммит)

В помощь каналу и комрадам, которые в первый раз запустили GIT и при этом файл не комитит
Вбиваем 2 команды со своими данными:
git config --global user.name "Name"

git config --global user.email "e-mail"

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

46. - React JS практика - копия глубокая vs поверхностная (deep copy vs shallow copy)

Ещё есть один вариант, как можно полностью скопировать объект. Попробуй написать
let newObject = JSON.parse(JSON.stringify(oldObject)) . Тут главная разница в том, что есть такой формат общения в ооп, как JSON(погуглите, там читать минут 5) и у него есть 2 метода. Допустим до вас приходит объект и вы его можете перевести в строку({num: 2, year: 15, boolean: false} ---> в JSON.stringify(Object) мы получим ---> '{"num": 2, "year": 15, "boolean": false}'), а потом перевести обратно в объект JSON.parse(object). Я обычно так делал и мен этого было достаточно, хотя есть и косяки

- при переводе в stringify NaN превращается в null. Вроде это все

Ловите лайфхак: Сначала с помощью JSON.stringify превращаем наш объект в текст, а затем парсим его обратно в объект с помощью JSON.parse.
let a = { name: 'Dimych' };
let b = JSON.parse(JSON.stringify(a));
a == b /// false

Все вложенности также будут скопированы в отдельные объекты и не будут равны (глубокое копирование).

Не копирует методы объекта.

47. - React JS практика - Делаем копию состояния в ProfileReducer

Описание под видео:

connect за кадром подписывается (с помощью store.subscribe) на изменения состояния (state) и перерисовывает только ту компоненту, которой это касается. То есть внутри mapStateToProps мы указываем, какие части стейта нам нужны (фактически: я перерисуюсь только если в стейте изменятся именно эти части).

Поэтому мы не будем делать с вами полную копию ВСЕГО стейта, а только тех объектов, которые будут изменены нашим редьюсером. С одной стороны, это поможет нам экономить память, а с другой - поможет connect-у обновлять только нужные компоненты!!!

Интересный коммент №1

(1) Идемпотентность - Свойство которое гарантирует, что при многократном вызове функции состояние будет изменено только единожды. Для примера можно посмотреть на работу DELETE в SQL. DELETE это идемпотентная операция. Например если в базе данных удалить с помощью DELETE ну к примеру пользователя, то при повторной попытке запуска такой функции с той же сигнатурой мы получаем что то вроде "This user already deleted". То есть мы 10 раз делаем попытку удаления пользователя, но состояние базы а именно ее изменение происходит единожды, остальные вызовы просто логируют, что операция уже была проведена, но ничего в самой базе не делают.

(2) Детерминированность - Обрабатываем только то что получили в сигнатуре (аргументы). При многократном вызове такой функции с теми же параметрами мы получаем один и тот же результат как и должно быть, но мы не защищены от многократного изменения состояния. К примеру если мы попробуем добавить в нашу базу данных пользователя и никак не защитимся от дубликатов, то при вызове такой детерминированной функции 10 раз, мы получим 10 дубликатов пользователя в базе.

Итог: Детерминированность НЕ обеспечивает идемпотентность и на оборот. Идемпотентность НЕ обеспечивает детерминированность. Мы вполне свободно можем писать грязные функции с любым из этих свойств, и комбинировать их между собой. Это два разных и нечем не связанных свойства функций которые предлагают разные гарантии при реализации.

Интересный коммент №2

Мы имеем исходный state (который хранится в redux: назовем его redux.state) и state - который возвращает наш reducer, назовем его reducer.state. Функция connect проверяет изменился ли redux.state после того, как прошел через reducer... и выясняет, что изменений нет. Почему? Потому что в reducer на вход передается ссылка на redux.state и когда ты меняешь state внутри reducer'a (reducer.state), то на самом деле - ты меняешь все тот же redux.state по ссылке. В итоге, все измменения, внесенные в reducer.state изменяют и redux.state (потому что они ссылаются на один и тот же объект в памяти, см.предидущее видео). И конечно же в результате проверки connect видит, что redux.state и reducer.state - совпадают, а значит ничего не поменялось.

А вот если сделать грамотную копию входящего state, то reducer.state будет работать с отдельным объктом в памяти, изменения которого не затронут redux.state. И при сравнении redux.state и reducer.state - функция connect выяснит, что есть расхождения и надо обнвлять VIRTUAL-DOM -> DOM.

P.S. Я уверен, что там реализована более умная проврка, чем просто redux.state === reducer.state, иначе просто правильная копия (без каких-либо изменений) выдавала бы false.

То есть по итогу переменная под именем stateCopy отдаёт свои данные в объект state и ликвидируется (?)
меня сбивает с толку то, что мы возвращаем из reducer`а именно stateCopy - а не state

если stateCopy - это то, что я обозвал как reducer.state, то сама stateCopy затирается после rerurn (но она же просто ссылка на данные, которые хранятся в памяти).

Мы не можем работать с самим state (я обозвал его, как redux.state) потому что мы не знаем где еще может этот state использоваться. Может от него еще 10 компонент зависит и мы щас ручками state изменим внутри reducer'a, и те компоненты не узнают, что нужный им стейт изменился и им надо отрисоваться заного. Насколько я понимаю, функция connect создает что то вроде подписки на изменение параметров, переданных ей в mapStateToProps, и, чтобы эти redux, сравнивая redux.state и reducer.state - когда видит изменения - вызывает соответсвующие подписки, передавая новые пропсы в connect, а тот передает их компоненте, она видит, что пропсы изменились и перерисовавыется.

А если мы изменим саму переменную state (а это союственно переменная, которая у меня названа redux.state) и потом вернем ее redux'y, то он будет сравнивать redux.state с redux.state в итоге. И, конечно не обнаружит никаких изменений (потому что наш reducer уже МУТИРОВАЛ эту внешнюю переменную)... и ... ну понимаешь что будет дальше? Сам стейт будет изменен, но ни один компонент не получит нужные ему обновленные пропсы, потому, что не вызовутся подписки из redux.

Это лично мое понимание. Я без понятия насколько оно правильное или нет. Потому что спросить не у кого)

Интересный коммент №3

как происходит сравнение при локальном subscribe в функции connect и как реакт понимает, вернулась ли копия state из редюсера или же сам оригинальный state. Получается так:
(1) Мы возвращаем часть state c которой работали из редюсера
(2) Реакт проверяет. Если это ссылка на оригинальный глобальный объект state, то ничего не делается (перерисовки не происходит), т.к. получается, что мы работали с глобальным state и функция редюсера нечистая, так нельзя.
(3) Если же из редюсера возвращается часть объекта state, например state.profilePage.posts, но ссылается уже грубо говоря, на другую ячейку в памяти нежели глобальный оригинальный state.profilePage.posts и при этом есть различия между posts копии и posts оригинала, то перерисовка происходит.
Так ли я понял? Ребят, объясните плз кто до конца врубился.

Интересные моменты:

Делали фуллстек - бэк на express (кроме джаваскрипта ж ничё не знаем), бд - mongo, для отображения верстки - handlebars. Деплоил сам на digitalocean, как прокси-сервер использовал nginx.

Деплой — процесс выкладки новой версии сайта на сервер (или сервера).
Задеплоить происходит от английского «to deploy», что означает «приводить в действие, разворачивать». В программировании задеплоить означает развернуть новую версию программы.

Парсинг (parsing) — это сбор информации из сторонних источников и сайтов для использования полученных данных в различных целях, от аналитики до копирования, простыми словами, это сбор данных из различных источников. Парсить можно с помощью специальных программ, а также языка программирования
Парсинг — это автоматизированный сбор и структурирование информации с сайтов при помощи программы или сервиса. Эта программа называется парсер и её задачей является сбор информации в соответствии с заданными параметрами. Например, при помощи парсинга сайтов можно создать описание карточек товаров онлайн-магазина.
