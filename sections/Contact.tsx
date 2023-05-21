export type FieldItem = {
    text: string;
    for: string;
}

export interface Props {
    name: FieldItem;
    lastname: FieldItem;
    email: FieldItem;
    message: FieldItem;
}

export default function Contact(
    { name = {for : "floating_name", text : "Pedro"}, 
      lastname = {for : "floating_lastname", text : "Rosa"},
      email = {for : "floating_email", text : "pedroluiz2109@gmail.com"},
      message = {for : "floating_message", text : "Mensagem Padrao"}
    }: Props) {
    return (
        <form class="p-10">
            <div class="group relative z-0 mb-6 w-full">
                <input type="email" name={email.for} id={email.for} class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                <label for={email.for} class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">{email.text}</label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="group relative z-0 mb-6 w-full">
                    <input type="text" name={name.for} id={name.for} class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                    <label for={name.for}  class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">{name.text}</label>
                </div>
                <div class="group relative z-0 mb-6 w-full">
                    <input type="text" name={lastname.for}  id={lastname.for}  class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                    <label for={lastname.for} class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">{lastname.text}</label>
                </div>
            </div>
            <div class="grid md:grid-cols-1 md:gap-6">
                <div class="group relative z-0 mb-6 w-full">
                    <input type="text" name={message.for} id={message.for} class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                    <label for={message.for} class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">{message.text}</label>
                </div>
            </div>
            <button type="submit" class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">ENVIAR</button>
        </form>
    )
}