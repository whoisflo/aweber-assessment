import Form from "./components/form/Form";

function App() {
    return (
        <div className="flex h-screen flex-col items-center justify-center px-6 py-8">
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
                <h1 className="text-xl font-bold">AWeber assessment</h1>
                <p className="mt-2 text-sm">
                    This component will check the strength of a password
                </p>
                <Form />
            </div>
        </div>
    );
}

export default App;
