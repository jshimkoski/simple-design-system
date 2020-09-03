<template>
  <div class="components p-0 flex">
    <aside class="hidden md:block">
      <div class="sticky top-0 pt-16 -mt-16 w-48">
        <nav class="p-8 pb-4 text-sm space-y-2">
          <h2 class="font-medium">Vuejs Components</h2>
          <a
            href="#layout-stacked"
            class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
            >Layout Stacked</a
          >
          <a
            href="#layout-sidebar"
            class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
            >Layout Sidebar</a
          >
          <a
            href="#navbar"
            class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
            >Navbar</a
          >
          <a
            href="#card"
            class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
            >Card</a
          >
          <a
            href="#external-link"
            class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
            >External Link</a
          >
          <a
            href="#modal"
            class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
            >Modal</a
          >
          <a
            href="#dropdown"
            class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
            >Dropdown</a
          >
          <a
            href="#calendar"
            class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
            >Calendar</a
          >
        </nav>
        <nav class="py-4 px-8 text-sm space-y-2">
          <h2 class="font-medium">CSS Components</h2>
          <a
            href="#nav"
            class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
            >Nav</a
          >
          <a
            href="#button"
            class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
            >Button</a
          >
          <a
            href="#form-control"
            class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
            >Form Control</a
          >
        </nav>
      </div>
    </aside>
    <div class="flex-grow space-y-8 p-4 md:py-6 md:px-8 lg:w-10/12">
      <h2 class="text-4xl">Components</h2>
      <h3 class="text-3xl">Vuejs Components</h3>
      <!-- Layout Stacked -->
      <sds-card id="layout-stacked" class="bg-gray-100">
        <template #title>
          <h2 class="text-3xl">Layout Stacked</h2>
        </template>
        <template #subtitle>
          <div class="space-y-2">
            <p>A traditional header/content/footer layout.</p>
            <p>Slots are optional and include: header, default, footer.</p>
            <p>Add <code>sticky-header</code> prop to make header sticky.</p>
            <p>Add <code>sticky-footer</code> prop to make footer sticky.</p>
          </div>
        </template>
        <section>
          <div class="bg-bgcolor">
            <sds-layout-stacked>
              <template #header>
                <header class="border-dashed border">Header</header>
              </template>
              <main class="border-dashed border">Default</main>
              <template #footer>
                <footer class="border-dashed border">Footer</footer>
              </template>
            </sds-layout-stacked>
          </div>
        </section>
      </sds-card>

      <!-- Layout Sidebar -->
      <sds-card id="layout-sidebar" class="bg-gray-100">
        <template #title>
          <h2 class="text-3xl">Layout Sidebar</h2>
        </template>
        <template #subtitle>
          <div class="space-y-2">
            <p>A traditional sidebar layout.</p>
            <p>
              Slots are optional and include: sidebar, header, default, footer.
            </p>
            <p>Add <code>sticky-header</code> prop to make header sticky.</p>
            <p>Add <code>sticky-footer</code> prop to make footer sticky.</p>
            <p>Add <code>sticky-sidebar</code> prop to make sidebar sticky.</p>
            <p>
              Use <code>sidebar-class</code> prop to add css classes to sidebar
              slot.
            </p>
          </div>
        </template>
        <section>
          <div class="bg-bgcolor">
            <sds-layout-sidebar>
              <template #sidebar>
                <div class="border-dashed border">Sidebar</div>
              </template>
              <template #header>
                <div class="border-dashed border">Header</div>
              </template>
              <main class="border-dashed border">Default</main>
              <template #footer>
                <div class="border-dashed border">Footer</div>
              </template>
            </sds-layout-sidebar>
          </div>
        </section>
      </sds-card>

      <!-- Navbar -->
      <sds-card id="navbar" class="bg-gray-100">
        <template #title>
          <h2 class="text-3xl">Navbar</h2>
        </template>
        <template #subtitle>
          <div class="space-y-2">
            <p>
              A horizontal navigation bar. Mobile version ends at
              <code>md</code> breakpoint.
            </p>
            <p>Slots are optional and include: brand, nav, nav-right.</p>
            <p>
              Use <code>nav-class</code> prop to add css classes to nav slot.
            </p>
            <p>
              Use <code>nav-right-class</code> prop to add css classes to
              nav-right slot.
            </p>
          </div>
        </template>
        <section class="space-y-4">
          <h3 class="text-lg">
            Nav Type: Default, No Gap, Nav Right Type: Pill
          </h3>
          <div class="bg-bgcolor">
            <sds-navbar nav-right-class="gap-2 md:py-1">
              <template #brand>
                <h1>Brand</h1>
              </template>
              <template #nav>
                <a href="#" class="nav active">Home</a>
                <a href="#" class="nav">About</a>
                <a href="#" class="nav">Contact</a>
              </template>
              <template #nav-right>
                <a href="#" class="nav nav-pill">Profile</a>
                <a href="#" class="nav nav-pill">Sign out</a>
              </template>
            </sds-navbar>
          </div>

          <h3 class="text-lg">
            Nav Type: Underline, Right Nav Type: Block, Right Nav Variant:
            Orange
          </h3>
          <div class="bg-bgcolor">
            <sds-navbar nav-class="gap-2">
              <template #brand>
                <h1>Brand</h1>
              </template>
              <template #nav>
                <a href="#" class="nav nav-underline active">Home</a>
                <a href="#" class="nav nav-underline">About</a>
                <a href="#" class="nav nav-underline">Contact</a>
              </template>
              <template #nav-right>
                <a href="#" class="nav nav-block nav-orange">Profile</a>
                <a href="#" class="nav nav-block nav-orange">Sign out</a>
              </template>
            </sds-navbar>
          </div>

          <h3 class="text-lg">
            Nav Style Type: Pill, Nav Color Variant: Purple, Nav Right Type:
            Underline
          </h3>
          <div class="bg-bgcolor mb-4">
            <sds-navbar nav-class="gap-2 md:py-1" nav-right-class="gap-2">
              <template #brand>
                <h1>Brand</h1>
              </template>
              <template #nav>
                <a href="#" class="nav nav-pill nav-purple active">Home</a>
                <a href="#" class="nav nav-pill nav-purple">About</a>
                <a href="#" class="nav nav-pill nav-purple">Contact</a>
              </template>
              <template #nav-right>
                <a href="#" class="nav nav-underline">Profile</a>
                <a href="#" class="nav nav-underline">Sign out</a>
              </template>
            </sds-navbar>
          </div>

          <h3 class="text-lg">
            No Brand, Nav Style Type: Block, Nav Color Variant: Red, Nav Has No
            Gap, Nav Right Type: Default
          </h3>
          <div class="bg-bgcolor mb-4">
            <sds-navbar>
              <template #nav>
                <a href="#" class="nav nav-block nav-red active">Home</a>
                <a href="#" class="nav nav-block nav-red">About</a>
                <a href="#" class="nav nav-block nav-red">Contact</a>
              </template>
              <template #nav-right>
                <a href="#" class="nav">Profile</a>
                <a href="#" class="nav">Sign out</a>
              </template>
            </sds-navbar>
          </div>
        </section>
      </sds-card>

      <!-- card -->
      <sds-card id="card" class="bg-gray-100">
        <template #title>
          <h2 class="text-3xl">Card</h2>
        </template>
        <template #subtitle>
          <div class="space-y-2">
            <p>Groups content for easy consumption.</p>
            <p>
              Slots are optional and include: title, subtitle, nav, default.
            </p>
            <p>
              Use <code>nav-class</code> prop to add css classes to nav slot.
            </p>
            <p>
              Use <code>type</code> prop to add a built-in styling. Options
              include: simple, raised, accented.
            </p>
          </div>
        </template>
        <section>
          <h2 class="text-lg mb-4">Type: Default</h2>
          <div class="bg-bgcolor mb-4">
            <sds-card>
              <template #title><h3>Hello There!</h3></template>
              <template #subtitle
                ><p>This is a sds-card with a subtitle</p></template
              >
              <template #nav>
                <a href="#" class="nav">Phone</a>
                <a href="#" class="nav">Email</a>
              </template>
              <section>This is the content of the sds-card.</section>
            </sds-card>
          </div>

          <h2 class="text-lg mb-4">Type: Simple</h2>
          <div class="bg-bgcolor mb-4">
            <sds-card type="simple" nav-class="gap-2">
              <template #title><h3>Hello There!</h3></template>
              <template #subtitle
                ><p>This is a sds-card with a subtitle</p></template
              >
              <template #nav>
                <a href="#" class="nav nav-underline">Phone</a>
                <a href="#" class="nav nav-underline">Email</a>
              </template>
              <section>This is the content of the sds-card.</section>
            </sds-card>
          </div>

          <h2 class="text-lg mb-4">Type: Raised</h2>
          <div class="bg-bgcolor mb-4">
            <sds-card type="raised" nav-class="gap-2">
              <template #title><h3>Hello There!</h3></template>
              <template #subtitle
                ><p>This is a sds-card with a subtitle</p></template
              >
              <template #nav>
                <a href="#" class="nav nav-pill">Phone</a>
                <a href="#" class="nav nav-pill">Email</a>
              </template>
              <section>This is the content of the sds-card.</section>
            </sds-card>
          </div>

          <h2 class="text-lg mb-4">Type: Accented</h2>
          <div class="bg-bgcolor mb-4">
            <sds-card type="accented">
              <template #title><h3>Hello There!</h3></template>
              <template #subtitle
                ><p>This is a sds-card with a subtitle</p></template
              >
              <template #nav>
                <a href="#" class="nav nav-block">Phone</a>
                <a href="#" class="nav nav-block">Email</a>
              </template>
              <section>This is the content of the sds-card.</section>
            </sds-card>
          </div>
        </section>
      </sds-card>

      <!-- External link -->
      <sds-card id="external-link" class="bg-gray-100">
        <template #title>
          <h2 class="text-3xl">External Link</h2>
        </template>
        <template #subtitle>
          <div class="space-y-2">
            <p>An easy to use replacement for an external link anchor tag.</p>
            <p>Use it like a regular anchor tag.</p>
          </div>
        </template>
        <section>
          <div class="bg-bgcolor space-y-2">
            <p>
              <sds-external-link href="https://google.com">
                No styling
              </sds-external-link>
            </p>
            <p>
              <sds-external-link href="https://google.com" class="btn btn-blue">
                Button styling
              </sds-external-link>
            </p>
          </div>
        </section>
      </sds-card>

      <!-- Modal -->
      <sds-card id="modal" class="bg-gray-100">
        <template #title>
          <h2 class="text-3xl">Modal</h2>
        </template>
        <template #subtitle>
          <div class="space-y-2">
            <p>A traditional modal dialog.</p>
            <p>Slots are optional and include: title, footer, default.</p>
            <p>Use a <code>v-model</code> prop to toggle modal display.</p>
          </div>
        </template>
        <section>
          <div class="bg-bgcolor mb-4">
            <button class="btn" @click="openModal = true">Open Modal</button>
            <sds-modal v-model="openModal">
              <template #title>
                <h3>Header</h3>
              </template>
              <section>
                <p>
                  <span
                    >This is the content of the modal with a right-aligned</span
                  >
                  <sds-dropdown v-model="openModalDropdown" right>
                    <button class="text-red hover:dark focus:darken">
                      <span>Dropdown</span>
                    </button>
                    <template #menu>
                      <a href="#" class="nav nav-block nav-red">Option 1</a>
                      <a href="#" class="nav nav-block nav-red">Option 2</a>
                      <a href="#" class="nav nav-block nav-red">Option 3</a>
                      <a href="#" class="nav nav-block nav-red">Option 4</a>
                      <a href="#" class="nav nav-block nav-red">Option 5</a>
                    </template>
                  </sds-dropdown>
                </p>
              </section>
              <template #footer>
                <button class="btn btn-red" @click="openModal = false">
                  Close Modal
                </button>
              </template>
            </sds-modal>
          </div>
        </section>
      </sds-card>

      <!-- Dropdown -->
      <sds-card id="dropdown" class="bg-gray-100">
        <template #title>
          <h2 class="text-3xl">Dropdown</h2>
        </template>
        <template #subtitle>
          <div class="space-y-2">
            <p>A traditional dropdown.</p>
            <p>Slots include: menu, default.</p>
            <p>Use a <code>right</code> prop to right align the dropdown.</p>
            <p>Use a <code>v-model</code> prop to toggle dropdown display.</p>
            <p>Adjust menu max height with a <code>max-height</code> prop.</p>
            <p>
              Use <code>menu-class</code> prop to add css classes to menu slot.
            </p>
          </div>
        </template>
        <section>
          <h2 class="text-lg mb-4">Type: Default</h2>
          <div class="bg-bgcolor mb-4">
            <button
              class="text-red block mb-4"
              @click="openDropdown = !openDropdown"
            >
              Toggle Dropdown 1
            </button>
            <sds-dropdown v-model="openDropdown" class="m-2">
              <button class="btn">
                Dropdown 1 (using btn and nav classes)
              </button>
              <template #menu>
                <a href="#" class="nav nav-pill">Option 1</a>
                <a href="#" class="nav nav-pill">Option 2</a>
                <a href="#" class="nav nav-pill">Option 3</a>
                <a href="#" class="nav nav-pill">Option 4</a>
                <a href="#" class="nav nav-pill">Option 5</a>
              </template>
            </sds-dropdown>
          </div>
        </section>
      </sds-card>

      <!-- Calendar -->
      <sds-card id="calendar" class="bg-gray-100">
        <template #title>
          <h2 class="text-3xl">Calendar</h2>
        </template>
        <template #subtitle>
          <div class="space-y-2">
            <p>A traditional calendar.</p>
            <p>
              Variants include: <code>white</code>, <code>black</code>,
              <code>blue</code>, <code>green</code>, <code>indigo</code>,
              <code>orange</code>, <code>pink</code>, <code>purple</code>,
              <code>red</code>, <code>teal</code>, <code>yellow</code>.
            </p>
            <p>
              Use <code>.sync</code> to syncronize the following props, ie make
              them act as v-model states: <code>date.sync</code>,
              <code>end-date.sync</code>, <code>min.sync</code>,
              <code>max.sync</code>.
            </p>
            <p>
              Can be used inline or embedded within an
              <code>sds-dropdown</code>.
            </p>
            <p>
              Use a <code>date</code> prop in <code>yyyy-MM-dd</code> format to
              set date.
            </p>
            <p>
              Use an <code>end-date</code> prop in
              <code>yyyy-MM-dd</code> format to set an end date. Requires
              <code>multiple</code> attribute.
            </p>
            <p>
              Use a <code>multiple</code> prop in combination
              <code>date</code> and <code>end-date</code> attributes to set a
              date range.
            </p>
            <p>
              Use a <code>max</code> prop in <code>yyyy-MM-dd</code> format to
              set maximum date.
            </p>
            <p>
              Use a <code>min</code> prop in <code>yyyy-MM-dd</code> format to
              set minimum date.
            </p>
            <p>
              Emits an <code>update:date</code> CustomEvent when the value of
              its <code>date</code> attribute changes.
            </p>
            <p>
              Emits an <code>update:end-date</code> CustomEvent when the
              <code>end-date</code> attribute changes.
            </p>
            <p>
              Emits an <code>update:max</code> CustomEvent when the value of its
              <code>max</code> attribute changes.
            </p>
            <p>
              Emits an <code>update:min</code> CustomEvent when the value of its
              <code>min</code> attribute changes.
            </p>
          </div>
        </template>
        <section>
          <h2 class="text-lg mb-4">Inline, Range, Red variant</h2>
          <div class="bg-bgcolor mb-4">
            <sds-calendar
              variant="red"
              class="m-2 mb-4"
              :min.sync="inlineCalendar.min"
              :max.sync="inlineCalendar.max"
              :date.sync="inlineCalendar.date"
              :end-date.sync="inlineCalendar.endDate"
              multiple
            />
          </div>

          <h2 class="text-lg mb-4">
            Inside an sds-dropdown with button, Both set to blue variant
          </h2>
          <div class="bg-bgcolor mb-4">
            <sds-dropdown v-model="calendarInDropdown" :max-height="500">
              <button class="btn btn-blue">
                {{ calendarDate !== "" ? calendarDate : "Pick a date" }}
              </button>
              <template #menu>
                <sds-calendar variant="blue" :date.sync="calendarDate" />
              </template>
            </sds-dropdown>
          </div>

          <h2 class="text-lg mb-4">
            Inside an sds-dropdown with lazy form-control, Purple variant
          </h2>
          <div class="bg-bgcolor mb-4">
            <sds-dropdown v-model="calendarInFormControl" :max-height="500">
              <input
                type="text"
                class="form-control"
                placeholder="yyyy-MM-dd"
                v-model.lazy="calendarDate"
              />
              <template #menu>
                <sds-calendar variant="purple" :date.sync="calendarDate" />
              </template>
            </sds-dropdown>
          </div>
        </section>
      </sds-card>

      <h3 class="text-3xl">CSS Components</h3>

      <!-- Navs -->
      <sds-card id="nav" class="bg-gray-100">
        <template #title>
          <h2 class="text-3xl">Nav</h2>
        </template>
        <template #subtitle>
          <div class="space-y-2">
            <p>Pre-defined nav items via a <code>.nav</code> class.</p>
            <p>
              Wrap in <code>.nav-group</code> for easy grouping and use
              <code>.gap-{n}</code> utility classes to add a gap between items.
            </p>
            <p>
              Variants include: <code>.nav-white</code>,
              <code>.nav-black</code>, <code>.nav-blue</code>,
              <code>.nav-green</code>, <code>.nav-indigo</code>,
              <code>.nav-orange</code>, <code>.nav-pink</code>,
              <code>.nav-purple</code>, <code>.nav-red</code>,
              <code>.nav-teal</code>,
              <code>.nav-yellow</code>
            </p>
            <p>
              Types include: <code>.nav-underline</code>,
              <code>.nav-overline</code>, <code>.nav-pill</code>,
              <code>.nav-block</code>.
            </p>
            <p>Add <code>.active</code> class to create an active look.</p>
            <p>
              Add a <code>disabled</code> attribute or
              <code>.disabled</code> class to give a button a disabled look.
            </p>
          </div>
        </template>
        <section>
          <div class="nav-group bg-bgcolor mb-8">
            <button class="nav active">Nav Item 1</button>
            <button class="nav">Nav Item 2</button>
            <button class="nav" disabled>Nav Item 3</button>
            <button class="nav">Nav Item 4</button>
          </div>

          <div class="nav-group bg-bgcolor mb-8">
            <button class="nav nav-pink active">Nav Item 1</button>
            <button class="nav nav-pink">Nav Item 2</button>
            <button class="nav pav-pink" disabled>Nav Item 3</button>
            <button class="nav nav-pink">Nav Item 4</button>
          </div>

          <div class="nav-group gap-2 bg-bgcolor mb-8">
            <button class="nav nav-underline nav-red active">Nav Item 1</button>
            <button class="nav nav-underline nav-red">Nav Item 2</button>
            <button class="nav nav-underline nav-red" disabled>
              Nav Item 3
            </button>
            <button class="nav nav-underline nav-red">Nav Item 4</button>
          </div>

          <div class="nav-group gap-2 bg-bgcolor mb-8">
            <button class="nav nav-underline active">Nav Item 1</button>
            <button class="nav nav-underline">Nav Item 2</button>
            <button class="nav nav-underline" disabled>Nav Item 3</button>
            <button class="nav nav-underline">Nav Item 4</button>
          </div>

          <div class="nav-group gap-2 bg-bgcolor mb-8">
            <button class="nav nav-overline nav-yellow active">
              Nav Item 1
            </button>
            <button class="nav nav-overline nav-yellow">Nav Item 2</button>
            <button class="nav nav-overline nav-yellow" disabled>
              Nav Item 3
            </button>
            <button class="nav nav-overline nav-yellow">Nav Item 4</button>
          </div>

          <div class="nav-group gap-2 bg-bgcolor mb-8">
            <button class="nav nav-overline active">Nav Item 1</button>
            <button class="nav nav-overline">Nav Item 2</button>
            <button class="nav nav-overline" disabled>Nav Item 3</button>
            <button class="nav nav-overline">Nav Item 4</button>
          </div>

          <div class="nav-group gap-2 bg-bgcolor py-1 mb-8">
            <button class="nav nav-pill nav-blue active">Nav Item 1</button>
            <button class="nav nav-pill nav-blue">Nav Item 2</button>
            <button class="nav nav-pill nav-blue" disabled>Nav Item 3</button>
            <button class="nav nav-pill nav-blue">Nav Item 4</button>
          </div>

          <div class="nav-group gap-2 bg-bgcolor py-1 mb-8">
            <button class="nav nav-pill active">Nav Item 1</button>
            <button class="nav nav-pill">Nav Item 2</button>
            <button class="nav nav-pill" disabled>Nav Item 3</button>
            <button class="nav nav-pill">Nav Item 4</button>
          </div>

          <div class="nav-group bg-bgcolor mb-8">
            <button class="nav nav-block nav-orange active">Nav Item 1</button>
            <button class="nav nav-block nav-orange">Nav Item 2</button>
            <button class="nav nav-block nav-orange" disabled>
              Nav Item 3
            </button>
            <button class="nav nav-block nav-orange">Nav Item 4</button>
          </div>

          <div class="nav-group bg-bgcolor mb-8">
            <button class="nav nav-block active">Nav Item 1</button>
            <button class="nav nav-block">Nav Item 2</button>
            <button class="nav nav-block" disabled>Nav Item 3</button>
            <button class="nav nav-block">Nav Item 4</button>
          </div>
        </section>
      </sds-card>

      <!-- Buttons -->
      <sds-card id="button" class="bg-gray-100">
        <template #title>
          <h2 class="text-3xl">Button</h2>
        </template>
        <template #subtitle>
          <div class="space-y-2">
            <p>Pre-defined buttons via a <code>.btn</code> class.</p>
            <p>Wrap in <code>.btn-group</code> for easy grouping.</p>
            <p>
              Variants include: <code>.btn-white</code>,
              <code>.btn-black</code>, <code>.btn-blue</code>,
              <code>.btn-green</code>, <code>.btn-indigo</code>,
              <code>.btn-orange</code>, <code>.btn-pink</code>,
              <code>.btn-purple</code>, <code>.btn-red</code>,
              <code>.btn-teal</code>,
              <code>.btn-yellow</code>
            </p>
            <p>
              Add a <code>.btn-outline</code> class to create an ouline type.
            </p>
            <p>
              Add a <code>.btn-pill</code> class to create a pill type. Works
              best when on a <code>.bg-bgcolor</code>
            </p>
            <p>
              Add a <code>.btn-block</code> class to create a block button with
              100% width.
            </p>
            <p>
              Add a <code>disabled</code> attribute or
              <code>.disabled</code> class to give a button a disabled look.
            </p>
            <p>
              Add an <code>.active</code> class to give a button an active look.
            </p>
          </div>
        </template>

        <section>
          <h3 class="text-lg mb-4">Button Group: Single Button</h3>
          <div class="btn-group mb-4">
            <button class="btn">Default</button>
          </div>

          <h3 class="text-lg mb-4">Button Group: Default Buttons</h3>
          <div class="btn-group mb-4">
            <button class="btn">Default</button>
            <button class="btn">Default</button>
            <button class="btn active">Default</button>
            <button class="btn">Default</button>
          </div>

          <h3 class="text-lg mb-4">Button Group: Outline Buttons</h3>
          <div class="btn-group mb-4">
            <button class="btn btn-outline">Outline</button>
            <button class="btn btn-outline">Outline</button>
            <button class="btn btn-outline active">Outline</button>
            <button class="btn btn-outline">Outline</button>
          </div>

          <div class="my-4 p-4 bg-bgcolor">
            <h3 class="text-lg mb-4">Button Group: Pill Buttons</h3>
            <div class="btn-group mb-4">
              <button class="btn btn-pill">Outline</button>
              <button class="btn btn-pill">Outline</button>
              <button class="btn btn-pill active">Outline</button>
              <button class="btn btn-pill">Outline</button>
            </div>
          </div>

          <div class="my-4 p-4 bg-bgcolor">
            <h3 class="text-lg mb-4">Button Group: Mix-and-match Buttons</h3>
            <div class="btn-group mb-4">
              <button class="btn btn-blue">Default</button>
              <button class="btn btn-pill btn-teal">Pill Teal</button>
              <button class="btn btn-orange active">Orange</button>
              <button class="btn btn-outline btn-red">Outline Red</button>
            </div>
          </div>

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
            <button class="btn btn-white btn-outline">White</button>
            <button class="btn btn-black btn-outline">Black</button>
            <button class="btn btn-blue btn-outline">Blue</button>
            <button class="btn btn-green btn-outline">Green</button>
            <button class="btn btn-indigo btn-outline">Indigo</button>
            <button class="btn btn-orange btn-outline">Orange</button>
            <button class="btn btn-pink btn-outline">Pink</button>
            <button class="btn btn-purple btn-outline">Purple</button>
            <button class="btn btn-red btn-outline">Red</button>
            <button class="btn btn-teal btn-outline">Teal</button>
            <button class="btn btn-yellow btn-outline">Yellow</button>
          </div>

          <div class="my-4 p-4 bg-bgcolor">
            <h3 class="text-lg my-4">Type: Pill</h3>
            <div class="space-x-2 space-y-2">
              <button class="btn btn-pill">Default</button>
              <button class="btn btn-white btn-pill">White</button>
              <button class="btn btn-black btn-pill">Black</button>
              <button class="btn btn-blue btn-pill">Blue</button>
              <button class="btn btn-green btn-pill">Green</button>
              <button class="btn btn-indigo btn-pill">Indigo</button>
              <button class="btn btn-orange btn-pill">Orange</button>
              <button class="btn btn-pink btn-pill">Pink</button>
              <button class="btn btn-purple btn-pill">Purple</button>
              <button class="btn btn-red btn-pill">Red</button>
              <button class="btn btn-teal btn-pill">Teal</button>
              <button class="btn btn-yellow btn-pill">Yellow</button>
            </div>
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
            <a href="#" tabindex="-1" class="btn btn-indigo disabled">Indigo</a>
            <a href="#" tabindex="-1" class="btn btn-orange disabled">Orange</a>
            <a href="#" tabindex="-1" class="btn btn-pink disabled">Pink</a>
            <a href="#" tabindex="-1" class="btn btn-purple disabled">Purple</a>
            <a href="#" tabindex="-1" class="btn btn-red disabled">Red</a>
            <a href="#" tabindex="-1" class="btn btn-teal disabled">Teal</a>
            <a href="#" tabindex="-1" class="btn btn-yellow disabled">Yellow</a>
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
        <template #title>
          <h2 class="text-3xl">Form Control</h2>
        </template>
        <template #subtitle>
          <div class="space-y-2">
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
        </template>

        <section>
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Components",
  metaInfo() {
    return {
      title: "Components",
    };
  },
  data() {
    return {
      openModalDropdown: false,
      openModal: false,
      openDropdown: false,
      calendarDate: "",
      calendarInDropdown: false,
      calendarInFormControl: false,
      inlineCalendar: {
        min: "2020-05-02",
        max: "2020-07-18",
        date: "2020-06-09",
        endDate: "2020-07-16",
      },
    };
  },
});
</script>
