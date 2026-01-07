import React, { useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/@extended/ui/button";
import { WidgetConfig, ChatBubble } from "@/components/ChatWidget";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import SendIcon from "@/assets/svg/send.svg?react";
import MessageIcon from "@/assets/svg/message.svg?react";
import CloseIcon from "@/assets/svg/close.svg?react";
import tailwindStyles from "@/index.css?inline";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChatWidget = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line no-console
  console.log(props, "props in chat widget");

  useEffect(() => {
    if (open && ref.current) {
      // Scroll to the bottom of the chat widget when it is opened
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [open]);

  return (
    <>
      <style>{tailwindStyles}</style>
      <ErrorBoundary>
        {/* Widget class is for giving the styles encapsulated to the widget, Defined here src\index.css:6 */}
        <div className="fixed bottom-4 right-4 z-1000 widget">
          <Popover onOpenChange={(isOpen) => setOpen(isOpen)}>
            <PopoverTrigger>
              <Button
                type="button"
                variant="ringHover"
                size="icon"
                className="rounded-full h-14 w-14"
              >
                {open ? <CloseIcon /> : <MessageIcon />}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              // Need to give class here as well
              className="!p-0 custom-scrollbars widget"
              side="top"
              align="end"
              sideOffset={10}
              alignOffset={5}
              style={{
                maxWidth: WidgetConfig.width,
                width: WidgetConfig.width,
              }}
            >
              <style>{tailwindStyles}</style>
              <div
                ref={ref}
                // id="chat-widget"
                className="mx-auto relative [&>*:nth-child(even)]:ml-auto overflow-y-auto"
                style={{
                  height: WidgetConfig.height,
                  maxWidth: WidgetConfig.width,
                }}
              >
                <div
                  className="p-3 flex flex-col flex-1 space-y-4"
                  style={{
                    height: `100% - ${WidgetConfig.chatInputHeight}px`,
                  }}
                >
                  <ChatBubble type="received" message="hello world" />
                  <ChatBubble message="my name is not world" />
                  <ChatBubble type="received" message="what is it then" />
                  <ChatBubble message="barbara" />
                  <ChatBubble type="received" message="why do you hate me, barbara" />
                  <ChatBubble message="you just seem really annoying, honestly" />
                  <ChatBubble type="received" message="i can change" />
                  <ChatBubble message="don't lie to me, we are done" />
                  <ChatBubble
                    type="received"
                    message="i will leave you alone but you must know that the mitochondria is the powerhouse of the cell"
                  />
                  <ChatBubble message="i said: we are done" />
                  {/* <div className="w-max max-w-sm m-4 px-4 py-2 rounded-full rounded-bl-none bg-gray-200">
              hello world
            </div>
            <div className="w-max max-w-sm m-4 px-4 py-2 text-white rounded-2xl rounded-br-none bg-pink-500">
              my name is not world
            </div>
            <div className="w-max max-w-sm m-4 px-4 py-2 rounded-2xl rounded-bl-none bg-gray-200">
              what is it then
            </div>
            <div className="w-max max-w-sm m-4 px-4 py-2 text-white rounded-2xl rounded-br-none bg-pink-500">
              barbara
            </div>
            <div className="w-max max-w-sm m-4 px-4 py-2 rounded-2xl rounded-bl-none bg-gray-200">
              why do you hate me, barbara
            </div>
            <div className="w-max max-w-sm m-4 px-4 py-2 text-white rounded-2xl rounded-br-none bg-pink-500">
              you just seem really annoying, honestly
            </div>
            <div className="w-max max-w-sm m-4 px-4 py-2 rounded-2xl rounded-bl-none bg-gray-200">
              i can change
            </div>
            <div className="w-max max-w-sm m-4 px-4 py-2 text-white rounded-2xl rounded-br-none bg-pink-500">
              don't lie to me, we are done
            </div>
            <div className="w-max max-w-sm m-4 px-4 py-2 rounded-2xl rounded-bl-none bg-gray-200">
              i will leave you alone but you must know that the mitochondria is the powerhouse of
              the cell
            </div>
            <div className="w-max max-w-sm m-4 px-4 py-2 text-white rounded-2xl rounded-br-none bg-pink-500">
              i said: we are done
            </div> */}
                </div>
              </div>
              <div className="flex-1 flex items-center px-2 gap-x-2">
                <TextareaAutosize
                  autoFocus
                  className="border-0 outline-none flex-1 py-4 px-2"
                  placeholder="Enter your message here..."
                  minRows={1}
                  maxRows={3}
                  style={{
                    resize: "none",
                  }}
                />
                <SendIcon className="h-6 w-6 text-gray-700" />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default ChatWidget;
