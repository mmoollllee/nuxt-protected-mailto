<template>
  <div>
    <p>This is a mailto link without showing the emailadress in the generated html source.</p>
    <Mailto mail='test@example.com' subject="Example Subject" body="Placeholder Body" title="Write me a email" />
    <p>Other one</p>
    <Mailto mail='test@example.com' subject="Example Subject" body="Placeholder Body" title="Write me a email">Button</Mailto>
    <p>Don't forget to set build.html.minify.decodeEntities = false</p>
  </div>
</template>
