<template>
  <div>
    <p>This is a mailto link without showing the email address in the generated html source (with subject & body).</p>
    <Mailto mail="test@example.com" subject="Example Subject" body="Placeholder Body" title="Write me a email" />
    <p>With text</p>
    <Mailto mail="test@example.com" subject="Example Subject" body="Placeholder Body" title="Write me a email">
      Button
    </Mailto>
    <p>With no subject or body</p>
    <Mailto mail="test@example.com" title="Write me a email" />
    <p>With just subject</p>
    <Mailto mail="test@example.com" subject="Example Subject" title="Write me a email" />
    <p>With just body</p>
    <Mailto mail="test@example.com" body="Placeholder Body" title="Write me a email" />
    <p>With multiple recipients (string)</p>
    <Mailto mail="test@example.com, test2@example.com" subject="Example Subject" body="Placeholder Body" title="Write me a email" />
    <p>With multiple recipients (array)</p>
    <Mailto :mail="['test@example.com', 'test2@example.com']" subject="Example Subject" body="Placeholder Body" title="Write me a email" />
    <p>With CC & BCC</p>
    <Mailto
      mail="test@example.com"
      cc="test2@example.com"
      :bcc="['test3@example.com', 'test4@example.com']"
      subject="Example Subject"
      body="Placeholder Body"
      title="Write me a email"
    />
    <p>With target="_blank" for those who wan't to target webmail Clients like gmail.com (See this <a href="https://github.com/mmoollllee/nuxt-protected-mailto/issues/1" target="_blank" title="GitHub Issue: Add target blank (open in new page) option #1">issue</a>)</p>
    <Mailto
      target="_blank"
      mail="test@example.com"
      cc="test2@example.com"
      :bcc="['test3@example.com', 'test4@example.com']"
      subject="Example Subject"
      body="Placeholder Body"
      title="Write me a email"
    />

    <p>Don"t forget to set <code>build.html.minify.decodeEntities = false</code></p>
  </div>
</template>
