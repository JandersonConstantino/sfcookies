declare module 'sfcookies' {
  function bake_cookie (name: string, value: any): void

  function read_cookie (name: string): any

  function delete_cookie (name: string): void
}