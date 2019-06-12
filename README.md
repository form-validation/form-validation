## Unhandled promise rejection: channel closed

If you see the error `Unhandled promise rejection (rejection id: 21): channel closed` when running `npm run dev`, you need to kill the current process and run it again:

```
// Find all processes listening on the port 3000
$ sudo lsof -i tcp:3000
node      12588 phuoc   14u  IPv6 0x6ac5e4802f27ed77      0t0  TCP *:hbci (LISTEN)

// Kill the process
$ kill -9 <PROCESS_ID>

// Run dev again
$ npm run dev
```
## JavaScript heap out of memory

If you see the following error
```
==== JS stack trace =========================================

Security context: 0x2ff0b7628799 <JSObject>
    1: fromString(aka fromString) [buffer.js:~292] [pc=0x248e6b8d11b](this=0x18a149902311 <undefined>,string=0x38d72370a3a9 <Very long string[9550471]>,encoding=0x2ff0b76390d9 <String[4]: utf8>)
    2: result(aka result) [/Volumes/dev/formvalidation/doc/node_modules/sapper/dist/dev.ts.js:~197] [pc=0x248e9bf0e71](this=0x18a149902311 <undefined>,info=0x1bb6e57ca01 <Object map = 0x1dbbf95e0661>)
  ...

FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
 1: node::Abort() [/usr/local/bin/node]
 2: node::FatalException(v8::Isolate*, v8::Local<v8::Value>, v8::Local<v8::Message>) [/usr/local/bin/node]
 3: v8::internal::V8::FatalProcessOutOfMemory(char const*, bool) [/usr/local/bin/node]
 4: v8::internal::Factory::NewRawTwoByteString(int, v8::internal::PretenureFlag) [/usr/local/bin/node]
 5: v8::internal::String::SlowFlatten(v8::internal::Handle<v8::internal::ConsString>, v8::internal::PretenureFlag) [/usr/local/bin/node]
 6: v8::String::WriteUtf8(char*, int, int*, int) const [/usr/local/bin/node]
 7: node::StringBytes::Write(v8::Isolate*, char*, unsigned long, v8::Local<v8::Value>, node::encoding, int*) [/usr/local/bin/node]
 8: node::Buffer::New(v8::Isolate*, v8::Local<v8::String>, node::encoding) [/usr/local/bin/node]
 9: node::Buffer::(anonymous namespace)::CreateFromString(v8::FunctionCallbackInfo<v8::Value> const&) [/usr/local/bin/node]
10: 0x248e5dcf6e7
11: 0x248e6b8d11b
```

you need to perform the steps below:

```
$ rm -rf __sapper__/
$ npm run dev
```

## Deployment

```
$ npm run predeploy
$ npm run deploy
```
