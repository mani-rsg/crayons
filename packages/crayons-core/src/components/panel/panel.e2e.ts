import { newE2EPage } from '@stencil/core/testing';

describe('fw-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<fw-panel></fw-panel>');
    const element = await page.find('fw-panel');
    expect(element).toHaveClass('hydrated');
  });

  it('renders child content', async () => {
    const page = await newE2EPage();

    await page.setContent('<fw-panel> This is panel content</fw-panel>');
    const element = await page.find('fw-panel');
    expect(element.shadowRoot).toEqualHtml(`<slot></slot>`);
  });

  it('renders child components', async () => {
    const page = await newE2EPage();
    const expectedContent = `
      <div>
        <fw-input
          class="hydrated"
          label='Name'
          icon-left="add-contact"
          state-text="Do not enter your user ID"
          state="warning"
          placeholder="Enter your official name"
          required
          clear-input
        >
          <input class="hidden-input" type="hidden" value="">
        </fw-input>
        <fw-button class="hydrated" color="secondary" role="button">Submit</fw-button>
        <fw-button class="hydrated" color="secondary" role="button">Save</fw-button>
      </div>`;
    await page.setContent(
      `<fw-panel>
        <div>
          <fw-input
            label='Name' icon-left="add-contact" state-text="Do not enter your user ID"
            state="warning"
            placeholder="Enter your official name"
            required
            clear-input
          >
          </fw-input>
          <fw-button color="secondary">Submit</fw-button>
          <fw-button color="secondary">Save</fw-button>
        </div>
    </fw-panel>`
    );
    const element = await page.find('fw-panel');
    expect(element.innerHTML).toEqualHtml(expectedContent);
  });
});
