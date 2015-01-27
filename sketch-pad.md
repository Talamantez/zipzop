	<p>Aspiration: <strong data-bind="text: aspiration"></strong></p>
	<p><input data-bind="value: aspiration, valueUpdate:'afterkeydown'"></input></p>


<button data-bind='click: doSomething'>Click me</button>

<div id="page" class="container" data-bind="component: { name: route().page, params: route }"></div>


    <nav-bar params="route: route"></nav-bar>
    <div id="page" class="container" data-bind="component: { name: route().page, params: route }"></div>