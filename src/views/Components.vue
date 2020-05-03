<template>
  <sds-container class="components p-0">
    <sds-layout-sidebar class="md:divide-x">
      <aside slot="sidebar" class="hidden md:block">
        <nav class="p-8 pb-4 text-sm space-y-2">
          <h2 class="font-medium text-base">Web Components</h2>
          <a
            href="#layout-stacked"
            class="block hover:text-red focus:text-red focus:outline-none"
            >Layout Stacked</a
          >
          <a
            href="#layout-sidebar"
            class="block hover:text-red focus:text-red focus:outline-none"
            >Layout Sidebar</a
          >
          <a
            href="#container"
            class="block hover:text-red focus:text-red focus:outline-none"
            >Container</a
          >
          <a
            href="#navbar"
            class="block hover:text-red focus:text-red focus:outline-none"
            >Navbar</a
          >
          <a
            href="#nav"
            class="block hover:text-red focus:text-red focus:outline-none"
            >Nav</a
          >
          <a
            href="#card"
            class="block hover:text-red focus:text-red focus:outline-none"
            >Card</a
          >
          <a
            href="#modal"
            class="block hover:text-red focus:text-red focus:outline-none"
            >Modal</a
          >
        </nav>
        <nav class="py-4 px-8 text-sm space-y-2">
          <h2 class="font-medium text-base">CSS Components</h2>
          <a
            href="#button"
            class="block hover:text-red focus:text-red focus:outline-none"
            >Button</a
          >
          <a
            href="#form-control"
            class="block hover:text-red focus:text-red focus:outline-none"
            >Form Control</a
          >
        </nav>
      </aside>
      <div slot="content" class="space-y-8 p-4 md:py-6 md:px-8 lg:w-10/12">
        <h2 class="text-4xl">Components</h2>
        <h3 class="text-3xl">Web Components</h3>
        <!-- Layout Stacked -->
        <sds-card id="layout-stacked" class="bg-gray-100">
          <h2 slot="title" class="text-3xl">Layout Stacked</h2>
          <div slot="subtitle">
            <p>
              A traditional header/content/footer layout.
            </p>
            <p class="my-2">
              Slots are optional and include: header, content, footer.
            </p>
          </div>
          <section slot="content">
            <h3 class="text-lg mb-4">Type: Default</h3>
            <sds-container class="bg-bgcolor">
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
          <div slot="subtitle">
            <p>A traditional sidebar/content/right sidebar layout.</p>
            <p class="my-2">
              Slots are optional and include: sidebar, content, sidebar-right.
            </p>
          </div>
          <section slot="content">
            <h3 class="text-lg mb-4">Type: Default</h3>
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
            <h3 class="text-lg mb-4">Type: Default</h3>
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
            <p>A horizontal navigation bar.</p>
            <p class="my-2">
              Use an sds-nav element for navigation styles.
            </p>
            <p class="my-2">
              Slots are optional and include: brand, nav, nav-right.
            </p>
            <p class="my-2">
              Use <code>hide-brand</code> attribute to hide the brand slot.
            </p>
          </div>
          <section slot="content" class="space-y-4">
            <h3 class="text-lg">
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

            <h3 class="text-lg">
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

            <h3 class="text-lg">
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

            <h3 class="text-lg">
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
            <p class="my-2">
              Slots include: item.
            </p>
          </div>
          <section slot="content">
            <h3 class="text-lg mb-4">
              Type: Default
            </h3>
            <sds-container class="bg-bgcolor mb-4">
              <sds-nav>
                <a slot="item" href="#" class="active">Home</a>
                <a slot="item" href="#">About</a>
                <a slot="item" href="#">Contact</a>
              </sds-nav>
            </sds-container>

            <h3 class="text-lg mb-4">
              Type: Underline, Variant: Blue
            </h3>
            <sds-container class="bg-bgcolor mb-4">
              <sds-nav type="underline" variant="blue">
                <a slot="item" href="#" class="active">Home</a>
                <a slot="item" href="#">About</a>
                <a slot="item" href="#">Contact</a>
              </sds-nav>
            </sds-container>

            <h3 class="text-lg mb-4">
              Type: Overline, Variant: Pink
            </h3>
            <sds-container class="bg-bgcolor mb-4">
              <sds-nav type="overline" variant="pink">
                <a slot="item" href="#" class="active">Home</a>
                <a slot="item" href="#">About</a>
                <a slot="item" href="#">Contact</a>
              </sds-nav>
            </sds-container>

            <h3 class="text-lg mb-4">
              Type: Pill, Variant: teal
            </h3>
            <sds-container class="bg-bgcolor mb-4">
              <sds-nav type="pill" variant="teal">
                <a slot="item" href="#" class="active">Home</a>
                <a slot="item" href="#">About</a>
                <a slot="item" href="#">Contact</a>
              </sds-nav>
            </sds-container>

            <h3 class="text-lg mb-4">
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
          <div slot="subtitle">
            <p>
              Groups content for easy consumption.
            </p>
            <p class="my-2">
              Slots are optional and include: title, subtitle, nav, content.
            </p>
          </div>
          <section slot="content">
            <h2 class="text-lg mb-4">Type: Default</h2>
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

            <h2 class="text-lg mb-4">Type: Simple</h2>
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

            <h2 class="text-lg mb-4">Type: Raised</h2>
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

            <h2 class="text-lg mb-4">
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

        <!-- Modal -->
        <sds-card id="modal" class="bg-gray-100 p-4 pb-6">
          <h2 slot="title" class="text-3xl">Modal</h2>
          <div slot="subtitle">
            <p>A traditional modal dialog.</p>
            <p class="my-2">
              Slots are optional and include: title, content, footer.
            </p>
            <p>Use an <code>open</code> attribute to display the modal.</p>
            <p class="my-2">Emits an <code>open</code> event.</p>
          </div>
          <section slot="content">
            <h2 class="text-lg mb-4">Type: Default</h2>
            <sds-container class="bg-bgcolor mb-4">
              <button class="btn" @click="openModal = true">Open Modal</button>
              <sds-modal :open="openModal" @open="openModal = $event.detail">
                <h3 slot="title">Header</h3>
                <section slot="content">
                  <p>This is the content of the modal.</p>
                </section>
                <footer slot="footer">
                  <button class="btn btn-red" @click="openModal = false">
                    Close Modal
                  </button>
                </footer>
              </sds-modal>
            </sds-container>
          </section>
        </sds-card>

        <h3 class="text-3xl">CSS Components</h3>
        <!-- Buttons -->
        <sds-card id="button" class="bg-gray-100">
          <h2 slot="title" class="text-3xl">Button</h2>
          <div slot="subtitle">
            <p>Pre-defined buttons via a <code>.btn</code> class.</p>
            <p class="mt-2">
              Variants include: <code>.btn-white</code>,
              <code>.btn-black</code>, <code>.btn-blue</code>,
              <code>.btn-green</code>, <code>.btn-indigo</code>,
              <code>.btn-orange</code>, <code>.btn-pink</code>,
              <code>.btn-purple</code>, <code>.btn-red</code>,
              <code>.btn-teal</code>,
              <code>.btn-yellow</code>
            </p>
            <p class="mt-2">
              Add a <code>.btn-outline</code> class to create an ouline type.
            </p>
            <p class="mt-2">
              Add a <code>.btn-block</code> class to create a block button with
              100% width.
            </p>
            <p class="mt-2">
              Add a <code>disabled</code> attribute or
              <code>.disabled</code> class to give a button a disabled look.
            </p>
          </div>

          <section slot="content">
            <h3 class="text-lg mb-4">Type: Default</h3>
            <div class="space-x-2 space-y-2">
              <button class="btn">Default</button>
              <button class="btn btn-white">White</button>
              <button class="btn btn-black">Black</button>
              <button class="btn btn-blue">Blue</button>
              <button class="btn btn-green">Green</button>
              <button class="btn btn-indigo">Indigo</button>
              <button class="btn btn-orange">Orange</button>
              <button class="btn btn-pink">Pink</button>
              <button class="btn btn-purple">Purple</button>
              <button class="btn btn-red">Red</button>
              <button class="btn btn-teal">Teal</button>
              <button class="btn btn-yellow">Yellow</button>
            </div>

            <h3 class="text-lg my-4">Type: Outline</h3>
            <div class="space-x-2 space-y-2">
              <button class="btn btn-outline">Default</button>
              <button class="btn btn-white btn-outline">
                White
              </button>
              <button class="btn btn-black btn-outline">
                Black
              </button>
              <button class="btn btn-blue btn-outline">
                Blue
              </button>
              <button class="btn btn-green btn-outline">Green</button>
              <button class="btn btn-indigo btn-outline">Indigo</button>
              <button class="btn btn-orange btn-outline">Orange</button>
              <button class="btn btn-pink btn-outline">Pink</button>
              <button class="btn btn-purple btn-outline">Purple</button>
              <button class="btn btn-red btn-outline">Red</button>
              <button class="btn btn-teal btn-outline">Teal</button>
              <button class="btn btn-yellow btn-outline">Yellow</button>
            </div>

            <h3 class="text-lg my-4">Type: Default, Disabled attriblte</h3>
            <div class="space-x-2 space-y-2">
              <button disabled class="btn">Default</button>
              <button disabled class="btn btn-white">White</button>
              <button disabled class="btn btn-black">Black</button>
              <button disabled class="btn btn-blue">Blue</button>
              <button disabled class="btn btn-green">Green</button>
              <button disabled class="btn btn-indigo">Indigo</button>
              <button disabled class="btn btn-orange">Orange</button>
              <button disabled class="btn btn-pink">Pink</button>
              <button disabled class="btn btn-purple">Purple</button>
              <button disabled class="btn btn-red">Red</button>
              <button disabled class="btn btn-teal">Teal</button>
              <button disabled class="btn btn-yellow">Yellow</button>
            </div>

            <h3 class="text-lg my-4">
              Anchor element, Type: Default, Disabled class, Tabindex -1
            </h3>
            <div class="space-x-2 space-y-2">
              <a href="#" tabindex="-1" class="btn disabled">Default</a>
              <a href="#" tabindex="-1" class="btn btn-white disabled">White</a>
              <a href="#" tabindex="-1" class="btn btn-black disabled">Black</a>
              <a href="#" tabindex="-1" class="btn btn-blue disabled">Blue</a>
              <a href="#" tabindex="-1" class="btn btn-green disabled">Green</a>
              <a href="#" tabindex="-1" class="btn btn-indigo disabled"
                >Indigo</a
              >
              <a href="#" tabindex="-1" class="btn btn-orange disabled"
                >Orange</a
              >
              <a href="#" tabindex="-1" class="btn btn-pink disabled">Pink</a>
              <a href="#" tabindex="-1" class="btn btn-purple disabled"
                >Purple</a
              >
              <a href="#" tabindex="-1" class="btn btn-red disabled">Red</a>
              <a href="#" tabindex="-1" class="btn btn-teal disabled">Teal</a>
              <a href="#" tabindex="-1" class="btn btn-yellow disabled"
                >Yellow</a
              >
            </div>

            <h3 class="text-lg my-4">Type: Default, Block</h3>
            <div class="space-y-2">
              <button class="btn btn-block">Default</button>
              <button class="btn btn-white btn-block">White</button>
              <button class="btn btn-black btn-block">Black</button>
              <button class="btn btn-blue btn-block">Blue</button>
              <button class="btn btn-green btn-block">Green</button>
              <button class="btn btn-indigo btn-block">Indigo</button>
              <button class="btn btn-orange btn-block">Orange</button>
              <button class="btn btn-pink btn-block">Pink</button>
              <button class="btn btn-purple btn-block">Purple</button>
              <button class="btn btn-red btn-block">Red</button>
              <button class="btn btn-teal btn-block">Teal</button>
              <button class="btn btn-yellow btn-block">Yellow</button>
            </div>
          </section>
        </sds-card>

        <!-- Form control -->
        <sds-card id="form-control" class="bg-gray-100">
          <h2 slot="title" class="text-3xl">Form Control</h2>
          <div slot="subtitle">
            <p>
              Pre-defined form controls for input, textarea, and select elements
              via a <code>.form-control</code> class.
            </p>
            <p class="mt-2">
              Add a <code>disabled</code> attribute or
              <code>.disabled</code> class for a disabled look.
            </p>
            <p class="mt-2">
              Add a <code>readonly</code> attribute for a button a readonly
              look.
            </p>
          </div>

          <section slot="content">
            <input
              type="text"
              class="form-control"
              placeholder="Placeholder text"
            />
            <select class="form-control my-4">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <select multiple class="form-control my-4">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <textarea
              class="form-control"
              rows="3"
              placeholder="Placeholder text"
            />

            <h3 class="text-lg my-4">Disabled</h3>
            <input
              type="text"
              class="form-control"
              placeholder="Placeholder text"
              disabled
            />
            <select disabled class="form-control my-4">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <select multiple disabled class="form-control my-4">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <textarea
              disabled
              class="form-control"
              rows="3"
              placeholder="Placeholder text"
            />

            <h3 class="text-lg my-4">Read only</h3>
            <input
              type="text"
              class="form-control"
              placeholder="Placeholder text"
              readonly
            />
            <select readonly class="form-control my-4">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <select multiple readonly class="form-control my-4">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <textarea
              readonly
              class="form-control"
              rows="3"
              placeholder="Placeholder text"
            />
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
  data() {
    return {
      openModal: false,
    };
  },
};
</script>
