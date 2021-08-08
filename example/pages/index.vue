<template>
  <div>
    <p>This is a mailto link without showing the email address in the generated html source (with subject & body).</p>
    <Mailto mail="test@example.com" subject="Example Subject" body="Placeholder Body" title="Write me a email" />
    <p>With text</p>
    <Mailto mail="test@example.com" subject="Example Subject" body="Placeholder Body" title="Write me a email">Button</Mailto>
    <p>With no subject or body</p>
    <Mailto mail="test@example.com" title="Write me a email">Button</Mailto>
    <p>With just subject</p>
    <Mailto mail="test@example.com" subject="Example Subject" title="Write me a email">Button</Mailto>
    <p>With just body</p>
    <Mailto mail="test@example.com" body="Placeholder Body" title="Write me a email">Button</Mailto>

    <p>Don"t forget to set build.html.minify.decodeEntities = false</p>
  </div>
</template>
