import * as React from "react";
import { tv } from "tailwind-variants";

const mockupVariants = tv({
  slots: {
    browser: "mockup-browser border border-base-300 w-full",
    browserToolbar: "mockup-browser-toolbar",
    browserInput: "input",
    code: "mockup-code w-full",
    phone: "mockup-phone",
    phoneCamera: "mockup-phone-camera",
    phoneDisplay: "mockup-phone-display",
    window: "mockup-window border border-base-300 w-full",
  },
});

export type MockupBrowserProps = Omit<React.ComponentProps<"div">, "color">;

const MockupBrowser = React.forwardRef<HTMLDivElement, MockupBrowserProps>(
  ({ className, ...props }, ref) => {
    const { browser } = mockupVariants();
    return <div ref={ref} className={browser({ className })} {...props} />;
  }
);

MockupBrowser.displayName = "MockupBrowser";

export type MockupBrowserToolbarProps = Omit<React.ComponentProps<"div">, "color"> & {
  url?: string;
};

const MockupBrowserToolbar = React.forwardRef<HTMLDivElement, MockupBrowserToolbarProps>(
  ({ url, className, children, ...props }, ref) => {
    const { browserToolbar, browserInput } = mockupVariants();
    return (
      <div ref={ref} className={browserToolbar({ className })} {...props}>
        {children ?? <div className={browserInput()}>{url}</div>}
      </div>
    );
  }
);

MockupBrowserToolbar.displayName = "MockupBrowserToolbar";

export type MockupCodeProps = Omit<React.ComponentProps<"div">, "color">;

const MockupCode = React.forwardRef<HTMLDivElement, MockupCodeProps>(
  ({ className, ...props }, ref) => {
    const { code } = mockupVariants();
    return <div ref={ref} className={code({ className })} {...props} />;
  }
);

MockupCode.displayName = "MockupCode";

export type MockupCodeLineProps = Omit<React.ComponentProps<"pre">, "color"> & {
  prefix?: string;
};

const MockupCodeLine = React.forwardRef<HTMLPreElement, MockupCodeLineProps>(
  ({ prefix, className, children, ...props }, ref) => (
    <pre ref={ref} data-prefix={prefix} className={className} {...props}>
      <code>{children}</code>
    </pre>
  )
);

MockupCodeLine.displayName = "MockupCodeLine";

export type MockupPhoneProps = Omit<React.ComponentProps<"div">, "color">;

const MockupPhone = React.forwardRef<HTMLDivElement, MockupPhoneProps>(
  ({ className, ...props }, ref) => {
    const { phone } = mockupVariants();
    return <div ref={ref} className={phone({ className })} {...props} />;
  }
);

MockupPhone.displayName = "MockupPhone";

export type MockupPhoneCameraProps = Omit<React.ComponentProps<"div">, "color">;

const MockupPhoneCamera = React.forwardRef<HTMLDivElement, MockupPhoneCameraProps>(
  ({ className, ...props }, ref) => {
    const { phoneCamera } = mockupVariants();
    return <div ref={ref} className={phoneCamera({ className })} {...props} />;
  }
);

MockupPhoneCamera.displayName = "MockupPhoneCamera";

export type MockupPhoneDisplayProps = Omit<React.ComponentProps<"div">, "color">;

const MockupPhoneDisplay = React.forwardRef<HTMLDivElement, MockupPhoneDisplayProps>(
  ({ className, ...props }, ref) => {
    const { phoneDisplay } = mockupVariants();
    return <div ref={ref} className={phoneDisplay({ className })} {...props} />;
  }
);

MockupPhoneDisplay.displayName = "MockupPhoneDisplay";

export type MockupWindowProps = Omit<React.ComponentProps<"div">, "color">;

const MockupWindow = React.forwardRef<HTMLDivElement, MockupWindowProps>(
  ({ className, ...props }, ref) => {
    const { window: windowCn } = mockupVariants();
    return <div ref={ref} className={windowCn({ className })} {...props} />;
  }
);

MockupWindow.displayName = "MockupWindow";

const MockupBrowserComponent = Object.assign(MockupBrowser, {
  Toolbar: MockupBrowserToolbar,
});

const MockupCodeComponent = Object.assign(MockupCode, {
  Line: MockupCodeLine,
});

const MockupPhoneComponent = Object.assign(MockupPhone, {
  Camera: MockupPhoneCamera,
  Display: MockupPhoneDisplay,
});

export {
  MockupBrowserComponent as MockupBrowser,
  MockupCodeComponent as MockupCode,
  MockupPhoneComponent as MockupPhone,
  MockupWindow,
};
