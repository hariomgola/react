CREATE OR REPLACE PROCEDURE hr.add_employee (
    p_first_name   IN  VARCHAR2,
    p_last_name    IN  VARCHAR2,
    p_salary       IN  NUMBER,
    p_employee_id  OUT NUMBER
) IS
BEGIN
    IF p_salary < 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Salary cannot be negative.');
    END IF;

    INSERT INTO hr.employees (employee_id, first_name, last_name, salary)
    VALUES (hr.employees_seq.NEXTVAL, p_first_name, p_last_name, p_salary)
    RETURNING employee_id INTO p_employee_id;

    -- Leave commit control to the caller (best practice)
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        RAISE_APPLICATION_ERROR(-20002, 'Duplicate employee.');
    WHEN VALUE_ERROR THEN
        RAISE_APPLICATION_ERROR(-20003, 'Invalid data type or value.');
    WHEN OTHERS THEN
        RAISE_APPLICATION_ERROR(-20099, 'Unexpected error: ' || SUBSTR(SQLERRM,1,1000));
END add_employee;
/