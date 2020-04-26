<template>
  <sds-container class="components p-0">
    <sds-layout-sidebar class="md:divide-x">
      <aside slot="sidebar" class="hidden md:block">
        <nav class="p-8 text-sm space-y-2">
          <h2 class="font-medium mb-2 text-base">Web Components</h2>
          <a href="#layout-stacked" class="block hover:text-red"
            >Layout Stacked</a
          >
          <a href="#layout-sidebar" class="block hover:text-red"
            >Layout Sidebar</a
          >
          <a href="#container" class="block hover:text-red">Container</a>
          <a href="#navbar" class="block hover:text-red">Navbar</a>
          <a href="#nav" class="block hover:text-red">Nav</a>
          <a href="#card" class="block hover:text-red">Card</a>
        </nav>
      </aside>
      <div slot="content" class="space-y-8 p-4 md:py-6 md:px-8">
        <h2 class="text-4xl">Components</h2>
        <h3 class="text-3xl">Web Components</h3>
        <!-- Layout Stacked -->
        <sds-card id="layout-stacked" class="bg-gray-100">
          <h2 slot="title" class="text-3xl">Layout Stacked</h2>
          <p slot="subtitle">
            A traditional header/content/footer layout. All slots are optional.
          </p>
          <section slot="content">
            <h3 class="text-lg mb-4 text-gray-600">Type: Default</h3>
            <sds-container class="bg-bgcolor h-64">
              <sds-layout-stacked>
                <header slot="header" class="border-dashed border">
                  Header
                </header>
                <main slot="content" class="border-dashed border">Content</main>
                <footer slot="footer" class="border-dashed border">
                  Footer
                </footer>
              </sds-layout-stacked>
            </sds-container>
          </section>
        </sds-card>

        <!-- Layout Sidebar -->
        <sds-card id="layout-sidebar" class="bg-gray-100">
          <h2 slot="title" class="text-3xl">Layout Sidebar</h2>
          <p slot="subtitle">
            A traditional sidebar/content/right sidebar layout. All slots are
            optional.
          </p>
          <section slot="content">
            <h3 class="text-lg mb-4 text-gray-600">Type: Default</h3>
            <sds-container class="bg-bgcolor">
              <sds-layout-sidebar>
                <header slot="sidebar" class="border-dashed border">
                  Sidebar
                </header>
                <main slot="content" class="border-dashed border">Content</main>
                <footer slot="sidebar-right" class="border-dashed border">
                  Sidebar-right
                </footer>
              </sds-layout-sidebar>
            </sds-container>
          </section>
        </sds-card>

        <!-- Container -->
        <sds-card id="container" class="bg-gray-100">
          <h2 slot="title" class="text-3xl">Container</h2>
          <p slot="subtitle">
            Generic container used to wrap content with default padding set. You
            can override padding with any padding utility class.
          </p>
          <section slot="content">
            <h3 class="text-lg mb-4 text-gray-600">Type: Default</h3>
            <sds-container class="bg-bgcolor">
              <sds-container class="border-dashed border">
                Content of container
              </sds-container>
            </sds-container>
          </section>
        </sds-card>

        <!-- Navbar -->
        <sds-card id="navbar" class="bg-gray-100">
          <h2 slot="title" class="text-3xl">Navbar</h2>
          <div slot="subtitle" class="w-2/3">
            <p>A horizontal navigation bar. All slots are optional.</p>
            <p class="my-2">
              Use an sds-nav element for navigation styles.
            </p>
          </div>
          <section slot="content" class="space-y-4">
            <h3 class="text-lg text-gray-600">
              Nav Type: Default, Nav Right Type: Pill
            </h3>
            <sds-container class="bg-bgcolor">
              <sds-navbar>
                <h1 slot="brand">
                  Brand
                </h1>
                <sds-nav slot="nav">
                  <a slot="item" href="#" class="active">Home</a>
                  <a slot="item" href="#">About</a>
                  <a slot="item" href="#">Contact</a>
                </sds-nav>
                <sds-nav slot="nav-right" type="pill">
                  <a slot="item" href="#">Profile</a>
                  <a slot="item" href="#">Sign out</a>
                </sds-nav>
              </sds-navbar>
            </sds-container>

            <h3 class="text-lg text-gray-600">
              Nav Type: Underline, Right Nav Type: Block, Right Nav Variant:
              Orange
            </h3>
            <sds-container class="bg-bgcolor">
              <sds-navbar>
                <h1 slot="brand">
                  Brand
                </h1>
                <sds-nav slot="nav" type="underline">
                  <a slot="item" href="#" class="active">Home</a>
                  <a slot="item" href="#">About</a>
                  <a slot="item" href="#">Contact</a>
                </sds-nav>
                <sds-nav slot="nav-right" type="block" variant="orange">
                  <a slot="item" href="#">Profile</a>
                  <a slot="item" href="#">Sign out</a>
                </sds-nav>
              </sds-navbar>
            </sds-container>

            <h3 class="text-lg text-gray-600">
              Nav Style Type: Pill, Nav Color Variant: Purple, Nav Right Type:
              Underline
            </h3>
            <sds-container class="bg-bgcolor mb-4">
              <sds-navbar>
                <h1 slot="brand">
                  Brand
                </h1>
                <sds-nav slot="nav" type="pill" variant="purple">
                  <a slot="item" href="#" class="active">Home</a>
                  <a slot="item" href="#">About</a>
                  <a slot="item" href="#">Contact</a>
                </sds-nav>
                <sds-nav slot="nav-right" type="underline">
                  <a slot="item" href="#">Profile</a>
                  <a slot="item" href="#">Sign out</a>
                </sds-nav>
              </sds-navbar>
            </sds-container>

            <h3 class="text-lg text-gray-600">
              No Brand, Nav Style Type: Block, Nav Color Variant: Red, Nav Right
              Type: Default
            </h3>
            <sds-container class="bg-bgcolor mb-4">
              <sds-navbar hide-brand>
                <sds-nav slot="nav" type="block" variant="red">
                  <a slot="item" href="#" class="active">Home</a>
                  <a slot="item" href="#">About</a>
                  <a slot="item" href="#">Contact</a>
                </sds-nav>
                <sds-nav slot="nav-right">
                  <a slot="item" href="#">Profile</a>
                  <a slot="item" href="#">Sign out</a>
                </sds-nav>
              </sds-navbar>
            </sds-container>
          </section>
        </sds-card>

        <!-- Nav -->
        <sds-card id="nav" class="bg-gray-100">
          <h2 slot="title" class="text-3xl">Nav</h2>
          <div slot="subtitle" class="w-2/3">
            <p>A horizontal navigation bar.</p>
            <p class="my-2">
              Type attribute options include default, underline, overline, pill,
              and block.
            </p>
            <p>
              Variant attribute options include blue, green, indigo, orange,
              pink, purple, red, teal, and yellow
            </p>
          </div>
          <section slot="content">
            <h3 class="text-lg mb-4 text-gray-600">
              Type: Default
            </h3>
            <sds-container class="bg-bgcolor mb-4">
              <sds-nav>
                <a slot="item" href="#" class="active">Home</a>
                <a slot="item" href="#">About</a>
                <a slot="item" href="#">Contact</a>
              </sds-nav>
            </sds-container>

            <h3 class="text-lg mb-4 text-gray-600">
              Type: Underline, Variant: Blue
            </h3>
            <sds-container class="bg-bgcolor mb-4">
              <sds-nav type="underline" variant="blue">
                <a slot="item" href="#" class="active">Home</a>
                <a slot="item" href="#">About</a>
                <a slot="item" href="#">Contact</a>
              </sds-nav>
            </sds-container>

            <h3 class="text-lg mb-4 text-gray-600">
              Type: Overline, Variant: Pink
            </h3>
            <sds-container class="bg-bgcolor mb-4">
              <sds-nav type="overline" variant="pink">
                <a slot="item" href="#" class="active">Home</a>
                <a slot="item" href="#">About</a>
                <a slot="item" href="#">Contact</a>
              </sds-nav>
            </sds-container>

            <h3 class="text-lg mb-4 text-gray-600">
              Type: Pill, Variant: teal
            </h3>
            <sds-container class="bg-bgcolor mb-4">
              <sds-nav type="pill" variant="teal">
                <a slot="item" href="#" class="active">Home</a>
                <a slot="item" href="#">About</a>
                <a slot="item" href="#">Contact</a>
              </sds-nav>
            </sds-container>

            <h3 class="text-lg mb-4 text-gray-600">
              Type: Block, Variant: Red
            </h3>
            <sds-container class="bg-bgcolor mb-4">
              <sds-nav type="block" variant="red">
                <a slot="item" href="#" class="active">Home</a>
                <a slot="item" href="#">About</a>
                <a slot="item" href="#">Contact</a>
              </sds-nav>
            </sds-container>
          </section>
        </sds-card>

        <!-- Card -->
        <sds-card id="card" class="bg-gray-100 p-4 pb-6">
          <h2 slot="title" class="text-3xl">Card</h2>
          <p slot="subtitle">
            Groups content for easy consumption. All slots are optional.
          </p>
          <section slot="content">
            <h2 class="text-lg mb-4 text-gray-600">Type: Default</h2>
            <sds-container class="bg-bgcolor mb-4">
              <sds-card>
                <h3 slot="title">Hello There!</h3>
                <p slot="subtitle">This is a card with a subtitle</p>
                <sds-nav slot="nav">
                  <a slot="item" href="#">Phone</a>
                  <a slot="item" href="#">Email</a>
                </sds-nav>
                <section slot="content">
                  This is the content of the card.
                </section>
              </sds-card>
            </sds-container>

            <h2 class="text-lg mb-4 text-gray-600">Type: Simple</h2>
            <sds-container class="bg-bgcolor mb-4">
              <sds-card type="simple">
                <h3 slot="title">Hello There!</h3>
                <p slot="subtitle">This is a card with a subtitle</p>
                <sds-nav slot="nav" type="underline">
                  <a slot="item" href="#">Phone</a>
                  <a slot="item" href="#">Email</a>
                </sds-nav>
                <section slot="content">
                  This is the content of the card.
                </section>
              </sds-card>
            </sds-container>

            <h2 class="text-lg mb-4 text-gray-600">Type: Raised</h2>
            <sds-container class="bg-bgcolor mb-4">
              <sds-card type="raised">
                <h3 slot="title">Hello There!</h3>
                <p slot="subtitle">This is a card with a subtitle</p>
                <sds-nav slot="nav" type="pill">
                  <a slot="item" href="#">Phone</a>
                  <a slot="item" href="#">Email</a>
                </sds-nav>
                <section slot="content">
                  This is the content of the card.
                </section>
              </sds-card>
            </sds-container>

            <h2 class="text-lg mb-4 text-gray-600">
              Type: Accented
            </h2>
            <sds-container class="bg-bgcolor mb-4">
              <sds-card type="accented">
                <h3 slot="title">Hello There!</h3>
                <p slot="subtitle">This is a card with a subtitle</p>
                <sds-nav slot="nav" type="block">
                  <a slot="item" href="#">Phone</a>
                  <a slot="item" href="#">Email</a>
                </sds-nav>
                <section slot="content">
                  This is the content of the card.
                </section>
              </sds-card>
            </sds-container>
          </section>
        </sds-card>
      </div>
    </sds-layout-sidebar>
  </sds-container>
</template>

<script>
export default {
  name: "Components",
  metaInfo() {
    return {
      title: "Components",
    };
  },
};
</script>
