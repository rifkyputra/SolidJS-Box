import { alert, eye } from '@primer/octicons';

const RegisterForm = () => {
    function togglePassword(id: string) {
        const password = document.getElementById(id) as HTMLInputElement;
        password.type = password.type === 'password' ? 'text' : 'password';
    }
    return (
        <>

            <h1>Register</h1>

            <div class="mt-3"></div>
            <form action="">

                <div class="d-flex">
                    <div class="form-group">
                        <input id="firstName" type="text" placeholder="First Name" class="form-control" />
                    </div>

                    <div class="px-1"></div>

                    <div class="form-group">
                        <input id="lastName" type="text" placeholder="Last Name" class="form-control" />
                    </div>
                </div>
                <div class="d-flex my-3">
                    <div class="form-group position-relative">
                        <div class='d-flex position-absolute end-0 align-items-center h-100 mx-3 '>
                            <i class='end-0 d-flex' innerHTML={eye.toSVG()} onClick={() => togglePassword('password-input1')}></i>
                        </div>
                        <input id="password-input1" type="password" placeholder="Password" class="form-control" />

                    </div>

                    <div class="px-1"></div>

                    <div class="form-group position-relative">
                        <div class='d-flex position-absolute end-0 align-items-center h-100 mx-3 '>
                            <i class='end-0 d-flex' innerHTML={eye.toSVG()} onClick={() => togglePassword('confirm-password-input1')}></i>
                        </div>
                        <input id="confirm-password-input1" type="password" placeholder="Confirm Password" class="form-control" />
                    </div>
                </div>

                <div class='form-group my-2'>
                    <input id="email" type="text" placeholder="email" class='form-control' />
                </div>

                <div class='form-group my-2'>
                    <input type="date" name="kdj" id="date" class='form-control'/>
                </div>


                <div class='my-3'></div>
                <input class='btn btn-primary' type="submit" value="Save" />
            </form>
        </>

    );

}

export default RegisterForm;
